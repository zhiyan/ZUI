ZUI 文档 -- angular架构方案
================
-----------------------------

## zui目录结构
* dist/ 编译生成的文件目录
* libs/ 公用库
* src/ 源文件
 * bootstrap/ 库bootstrap less版源文件
 * directive/ 自定义公用angular指令、配置、函数等
 * env/ 环境变量
 * plugins/ 公用插件
 * basic.less 样式入口源文件
 * ZUI.js 脚本入口文件

##  项目建议目录结构

* ..
 * zui/
 * index.html 首页
 * common/ 公用模板如header,nav等
 * devapi/ 接口测试用例
 * report(eg.)/ 业务逻辑区分的子菜单(根据需要可多级)
     * js\
         * app.js 路由
         * controller.js controller
         * util.js 业务逻辑共享的工具方法
      * template\ 模板
      * index.html 子菜单的首页
   * ...


## grunt

* grunt 编译全部
* grunt dist-css 编译css
* grunt dist-js 编译js
* grunt dev 切换为dev环境
* grunt prd 切换为prd环境

> zui根目录执行，第一次执行前npm install安装依赖node modules,确保node_modules在版本库ignore中

## 公用directive

Directive  | 描述 | 参数attr | 所在文件
-----|----- | ------ | ----
ng-pickerdate | 日期控件 | cate: month/day/quarter/year| /src/directive/datepicker.js
ng-menu | 菜单控件 | url : "菜单请求接口地址"| /src/directive/menu.js
ng-search | 查询控件 | 详见ng-search栏 | /src/directive/search.js
headerController | header控制器 | 属性为body属性。 loginUrl: "登录地址", loginType:登录类型"qsso"或"usercenter"| /src/directive/header.js

> 以及angular-bootstrap所有内部支持的filters, http://angular-ui.github.io/bootstrap


## 公用filters

Filters  | 描述
-----|----
rate | 0.2 => 20.00%
capitalize | abc => Abc
currencySymbol | ￥ => ¥
total | [1,2,3] => 6; [{count:2},{count:3}] => 参数"count" => 5

> 所在文件: /src/directive/filters.js

> 以及angularjs所有内部支持的filters

## 公用function
Function  | 描述
-----|----
url | window.url, zui.url, 处理后台异步请求接口，供dev本地测试用

> 所在文件: /src/directive/fn.js


## 公用plugin

Plugin  | 所在文件
-----|----
moment | /src/directive/moment.js
jquery.cookie | /src/plugins/jquery.mobile.js

## ng-search
scope vm  | 描述 | 示例
-----|----- | ------
search | 当前查询条件 | 
origin | 默认查询条件 | 
master | 当前分页的查询条件 | 
setMaster() | 将当scope.search更新到scope.master
addOrigin() | 加入到默认查询条件 | scope.addOrigin("limit",8) 

## 多语言
向外提供  | 描述 | 取值/示例
-----|----- | ------
$ln | angular资源 | zh/en/...
window.ln | 全局变量 | zh/en/...
window.setLocale | 全局函数 | window.setLocale("en")

> 所在文件 /src/directive/i18n.js
