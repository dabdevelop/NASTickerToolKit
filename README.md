## 主要内容 NTT挖矿教程
[//]: # ()



### 1. 获取钱包前期准备

如果没有NAS地址请先获得NAS钱包地址，存储好地址json文件和密码！！！ NAS钱包官网项目（chrome插件）
https://github.com/nebulasio/WebExtensionWallet

NTT地址和NAS地址一样
星图NTT钱包地址https://nasticker.com/#

在钱包中存储至少1个NTT和一个NAS之后，可以挖矿。


### 2. 克隆项目

首先安装node
```
 brew install node
 ```
然后安装npm
```
npm i
 ```
安装依赖nebulas
 ```
 npm install nebulas
 ```

 克隆项目 https://github.com/dabdevelop/NASTickerToolKit
 项目克隆到本地后

 在<font color=#FF0000 >项目文件夹</font>里新建accounts文件夹
  ```
  mkdir accounts
   ```
 将注册钱包时的keystore文件 钱包名.jason文件（n1…….json）放入accounts 文件夹。
 然后在文件夹中新建accounts.json文件，
 里面写入

 ["n1¥¥¥¥¥¥¥¥¥¥¥¥","n1RDoFyVbYNywBQPjiFb36zHZ6rh5yPHVuo","n1VyQXE9VpyR7v3fK77z5b5qkfq2GqLo7A4","n1anHGgCGewu9HUsoSymk1fQhFZ6RUhVUJq","n1Toe34Kj657zdAdRGACyp5ffExjzaAokqR"]

 里面的第一个元素 n1¥¥¥¥¥¥¥¥¥¥¥¥ 为自己的NAS地址（ n1……）

 修改main.js
 第23行的 var passphrase = "password";
 将password改为自己钱包的密码，保存main.js文件。

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

 1.Error: Cannot find module './accounts/accounts.json'
 accounts.json 
 
 文件没存储好

 2，Error: Cannot find module './accounts/n1…….json'
 钱包.json 
 
 文件没存储好

 3，Error: Cannot find module 'nebulas'
 
 安装 npm install nebulas

 4，Error: Key derivation failed - possibly wrong passphrase
 main.js 
 
 第23行的密码没改过来，或者密码记错了



****
