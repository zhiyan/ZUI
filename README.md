# ZUI 开发文档

## 文件目录划分

* src 源码目录
	* bootstrap bootstrap源码文件夹，包含js和css（less）
	* basic.less ZUI的css源文件，目前直接引入bootstrap
	* ZUI.js ZUI的js源文件
* dist 生成目录
	* css 编译生成的css文件，ZUI.css
	* font css中用到的font图标
	* js 编译生成的js文件，包含ZUI.js, bootstrap.js(bootstrap自带js控件)
		* ZUI用到的库，根据需要引入，包含angular, highcharts, jquery等
* demo 示例文件夹，测试用，需nginx起服务访问


## grunt

grunt支持任务:

* dist-js
* dist-css
* watch

## 新项目构建(暂定)
css:

	<link rel="stylesheet" href="../dist/css/ZUI.min.css">

js:

	<script src="../dist/js/libs/angular.js"></script>
	<script src="js/app.js"></script>
	<script src="js/services/main.js"></script>
	<script src="js/controller/main.js"></script>
	<script src="js/filters/main.js"></script>

其中service/controllerj/filters为业务逻辑

## 待开发

* 样式
	* 基本色彩
	* 栅格
	* 排版
	* 按钮/按钮组
	* 表格
	* 输入框
	* 下拉菜单
	* 导航
	* Tab
	* 链接文字
	* 面包屑 
	* 分页组件
	* 标签
	* 徽章
	* 提示框
	* 进度条
	* 弹窗
	* 日历
	* 选择控件
	* 滚动条
	* 气泡
* 脚本
	* UI控件整合angular
	* angular 架构搭建
	* 菜单系统
	* highcharts封装
	* 基础service/filters/controllers
	* angular 异步加载方案
	* 测试用例
* 页面
	* 18个页面根据angular搭建
	* charts
	* 模拟后台数据/测试

