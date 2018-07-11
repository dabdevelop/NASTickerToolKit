## 主要内容 NTT挖矿教程


### 1. 获取钱包前期准备

如果没有NAS地址请先获得NAS钱包地址，存储好地址json文件和密码！！！ NAS钱包官网项目（chrome插件）
https://github.com/nebulasio/WebExtensionWallet

NTT地址和NAS地址一样
星图NTT钱包地址https://nasticker.com/#

在钱包中存储至少25个NTT和0.01NAS之后，可以挖矿。


## 挖矿 docker 版本

#### 方法1 直接使用打包好的docker image

可以部署到任何支持docker的服务器。

``` 
docker pull yuxizhe/nastickertoolkit
``` 

运行时设置环境变量  

> KEY : 账号json信息

> PASSWORD : 账号密码


#### 方法2 自己打包使用

修改 Dockerfile 中的变量
KEY 和 PASSWORD 。 格式见文件中的例子
