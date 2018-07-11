# 主要内容 NTT挖矿教程

## 手动配置步骤

### 1. 获取钱包前期准备

如果没有NAS地址请先获得NAS钱包地址，存储好地址json文件和密码！！！ NAS钱包官网项目（chrome插件）
https://github.com/nebulasio/WebExtensionWallet

NTT地址和NAS地址一样
星图NTT钱包地址https://nasticker.com/#

在钱包中存储至少20个NTT和0.01NAS之后，可以挖矿。

### 2. 克隆项目


首先安装node和npm
```
 brew install node
 ```
克隆项目到本地

```
git clone https://github.com/dabdevelop/NASTickerToolKit
 ```

进入项目文件夹使用npm安装依赖
```
npm i
 ```
安装的依赖为nebulas和bluebird
 ```
 npm install nebulas bluebird
 ```

 在<font color=#FF0000 >项目文件夹</font>里新建accounts文件夹
  ```
  mkdir accounts
   ```
 将注册钱包时的keystore文件 钱包名.json文件（n1*****************.json）放入accounts 文件夹。
 然后在项目文件夹中新建accounts.json文件，
 里面写入

 ["n1*****************","<password>"]

 里面的第一个元素 n1***************** 改成NAS地址
第二个元素为 密码 将<password>改为自己钱包的密码并保存

 cd进入项目文件夹，最后在终端运行
  ```
 node main.js
 ```
 若出现字样：

 n1Mpxne8aiiyK5NQcakpDDNmTdQDZh53xKk call n1sr4JA4e9QPB4opLk2Kjmp8NkP6GGoAmnt @ sellPrice: [0.1] with value: 0 time: 2018/7/7 上午11:26:04
 n1Mpxne8aiiyK5NQcakpDDNmTdQDZh53xKk call n1sr4JA4e9QPB4opLk2Kjmp8NkP6GGoAmnt @ sellPrice: [0.1] with value: 0 time: 2018/7/7 上午11:26:04
 
 
 表示开始挖矿
****
 有可能的问题：

 1. Error: Cannot find module './accounts/accounts.json'
 accounts.json 
 
 文件没存储好

 2. Error: Cannot find module './accounts/n1*****************.json'
 钱包.json 
 
 文件没存储好

 3. Error: Cannot find module 'nebulas'
 
 安装nebulas: npm install nebulas

 4. Error: Cannot find module 'bluebird'

 安装bluebird: npm install bluebird

 5. Error: Key derivation failed - possibly wrong passphrase
 main.js 
 
 密码没改过来，或者密码错了

## 自动配置步骤

 安装依赖之后进入项目文件夹，最后在终端运行
   ```
  npm start
  ```

  往产生的地址里面充入0.01 NAS 作为 Gas 和一些NTT作为虚拟算力

## 挖矿 docker 版本

#### 方法1 直接使用打包好的docker image

可以部署到任何支持docker的服务器。

``` 
docker pull dabdevelop/nastickertoolkit
``` 

运行时设置环境变量  

> KEY : 账号json信息

> PASSWORD : 账号密码


#### 方法2 自己打包使用

修改 Dockerfile 中的变量
KEY 和 PASSWORD 。 格式见文件中的例子
