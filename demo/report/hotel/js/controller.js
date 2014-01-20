// 账户余额
zui.controller('AccountBalanceController',function($scope, $routeParams, $http) {
	// $http.get('/api/' + $routeParams.id + '.json').success(function(data) {
	//     $scope.data = data.data;
	//  });
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

// 价格配置
zui.controller('PriceSettingController',function($scope, $routeParams, $http) {
});