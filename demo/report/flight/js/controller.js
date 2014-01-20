// 账户余额
zui.controller('AccountBalanceController',function($scope, $routeParams, $http) {
	$http.get('/api/table.json').success(function(data) {
		$scope.title = ['','otaPay','pay','insuranceId','insuranceAccountId','payDate','profit','payed'];
	    $scope.list = data.data.flights;
	 });
});

// 多日点击
zui.controller('MultiClickController', function($scope) {
	$scope.data=[];
	// List.query(function (response) {
	//     angular.forEach(response.list, function (item) {
	//         if (item.id) {
	//             $scope.data.push(item.id);
	//         }
	//     });
	// });
});

// 多日消费
zui.controller('MultiConsumeController',function($scope, $routeParams, $http) {
});

// 多日出票
zui.controller('MultiDraftController',function($scope, $routeParams, $http) {
});

// 点击分析
zui.controller('ClickAnalyzeController',function($scope, $routeParams, $http) {
});

// 点击阶梯分析
zui.controller('ClickStepAnalyzeController',function($scope, $routeParams, $http) {
});

// Top航线上传
zui.controller('TopAirUploadController',function($scope, $routeParams, $http) {
});

// Top航线列表
zui.controller('TopAirListController',function($scope, $routeParams, $http) {
});

// Top航线消费
zui.controller('TopAirConsumeController',function($scope, $routeParams, $http) {
});

// CPC价格配置
zui.controller('CpcPriceSettingController',function($scope, $routeParams, $http) {
});

// 航空公司舱位票面额汇总
zui.controller('CompanyCollectController',function($scope, $routeParams, $http) {
});

// 业务视角收入报表
zui.controller('BussinessIncomeController',function($scope, $routeParams, $http) {
});

// 航空公司CPA总额阶梯票面额汇总
zui.controller('CompanyCpaCollectController',function($scope, $routeParams, $http) {
});

// CPC月结报表
zui.controller('CpcMonthController',function($scope, $routeParams, $http) {
});

// CPA月结报表
zui.controller('CpaMonthController',function($scope, $routeParams, $http) {
});
