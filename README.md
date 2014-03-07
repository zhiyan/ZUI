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


## grunt

grunt支持任务:

* dist-js
* dist-css
* watch
