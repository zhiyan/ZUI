zui.directive("ngMenu",function($scope, $routeParams, $http) {
	$scope.menuList = {
		"0" : {
			"name" : "机票",

		},

	}
	// $http.get('api/' + $routeParams.id + '.json').success(function(data) {
	//     $scope.data = data.data;
	//  });
});