// route
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/multiStatistics', {
        templateUrl: 'template/common.html',
        controller: 'MultiStatisticsController'
      })
      .otherwise({
        redirectTo: '/multiStatistics'
      });
}]);