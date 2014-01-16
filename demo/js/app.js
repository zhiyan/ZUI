// route
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: 'template/list.html',
        controller: 'ListController'
      })
      .when('/list/:id', {
          templateUrl: 'template/detail.html',
          controller: 'DetailController'
      })
      .otherwise({
        redirectTo: '/list'
      });
}]);