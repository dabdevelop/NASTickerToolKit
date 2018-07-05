"use strict";

// Step 0: Configure Network and Path
var Nebulas = require("nebulas"),
    Account = Nebulas.Account,
    Neb = Nebulas.Neb,
    Utils = Nebulas.Utils,
    Unit = Nebulas.Unit,
    neb = new Neb();

var rpcURL = "https://mainnet.nebulas.io";
var chainId = -1;
var cgDappAddress = 'n1sr4JA4e9QPB4opLk2Kjmp8NkP6GGoAmnt';
var dappAddress = 'n1kVKK53C85Cu6PBkgE8Qvch9ym5GxnDSWr';

neb.setRequest(new Nebulas.HttpRequest(rpcURL));
var path = "./accounts/";

var accounts = require(path + "accounts.json");
var key = JSON.stringify(require(path + accounts[0] + ".json"));
var acc = new Account();
var passphrase = "password";
acc = acc.fromKey(key, passphrase, true);

setInterval(CGTPriceDaemon, 15000);

function CGTPriceDaemon(){
    if(chainId > 0){
        getCGTPrice(function(price){
            updateTokenPrice(dappAddress, {nas: price});
        });
    } else {
        neb.api.getNebState().then((nebstate) => {
            chainId = nebstate.chain_id;
        });
    }
}

function updateTokenPrice(address, price){
    //updateTokenPrice
    var fun = 'updateTokenPrice';
    var args = [];
    args.push(price);
    callContract(address, fun, args, 0, acc);
}

function callContract(contractAddress, fun, args, value, acc){

        let address = acc.getAddressString();
        neb.api.getAccountState(address).then((accstate) => {
            if(Unit.fromBasic(accstate.balance, "nas").toNumber() > value){
                let _value = Unit.toBasic(value);
                let _nonce = parseInt(accstate.nonce) + 1;
                let _to = contractAddress;
                let _gasPrice = 1000000;
                let _gasLimit = 2000000;
                let _contract = {
                    "function": fun,
                    "args": JSON.stringify(args)
                };

                //generate transaction information
                var Transaction = Nebulas.Transaction;
                var tx = new Transaction({
                    chainID: chainId,
                    from: acc,
                    to: _to,
                    value: _value,
                    nonce: _nonce,
                    gasPrice: _gasPrice,
                    gasLimit: _gasLimit,
                    contract: _contract
                });
                tx.signTransaction();
                console.log(address + ' call ' + contractAddress + ' @ ' + _contract.function + ": " +JSON.stringify(_contract.args) + ' with value: ' + value);
                //send a transfer request to the NAS node

                neb.api.sendRawTransaction({
                    data: tx.toProtoString()
                }).then((result) => {
                    let txhash = result.txhash;
                    let trigger = setInterval(() => {
                        try{
                            neb.api.getTransactionReceipt({hash: txhash}).then((receipt) => {
                                if (receipt.status != 2) //not in pending
                                {
                                    console.log(JSON.stringify(receipt));
                                    clearInterval(trigger);
                                }
                            });
                        } catch(err){
                            console.log(err);
                            clearInterval(trigger);
                        }
                    }, 5000);
                });

            } else {
                console.log("Escape " + address + " balance less than "+ value +" NAS.");
            }
        });

}


function innerCall(fun, args, value, callback, address) {
    let params = {};
    var accounts = require(path + "accounts.json");
    var key = JSON.stringify(require(path + accounts[0] + ".json"));
    var acc = new Account();
    acc = acc.fromKey(key, passphrase, true);
    params.from = acc;
    if(Account.isValidAddress(address)){
        params.to = address;
    } else{
        params.to = dappAddress;
    }
    params.gasPrice = Utils.toBigNumber(1000000);
    params.gasLimit = Utils.toBigNumber(20000000);
    params.value = value;
    // prepare contract
    params.contract = {
        "function": fun,
        "args": JSON.stringify(args)
    };
    console.log(params.from.getAddressString() + ' call ' + params.to + ' @ ' + fun + ": " + JSON.stringify(args) + ' with value: ' + value + ' time: ' + (new Date().toLocaleString()));
    callback(params);
}

function getCGTPrice(callback){
    var fun = 'sellPrice';
    var args = [];
    args.push(0.1);
    innerCall(fun, args, 0, function(params){
        neb.api.call(params.from.getAddressString(), params.to, params.value, 0, params.gasPrice, params.gasLimit, params.contract).then(function (resp) {
            var result = resp.result;
            if(result === 'null' || result === '""'){
                return;
            }
            try{
                var order = JSON.parse(result);
                callback(order.price);
            }catch (err){
                //result is the error message
                console.log("error:" + err.message)
            }
        }).catch(function (err) {
            console.log("error:" + err.message)
        });

    }, cgDappAddress);
}