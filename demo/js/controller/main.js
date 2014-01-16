zui.controller('ListController', function($scope,List) {
	$scope.data=[];
	List.query(function (response) {
	    angular.forEach(response.list, function (item) {
	        if (item.id) {
	            $scope.data.push(item.id);
	        }
	    });
	});
});

zui.controller('DetailController',function($scope, $routeParams, $http) {
	$http.get('api/' + $routeParams.id + '.json').success(function(data) {
	    $scope.data = data.data;
	 });
});