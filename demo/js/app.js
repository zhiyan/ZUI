// route
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/flight/clicks', {
        templateUrl: 'template/flightClicks.html',
        controller: 'FlightClicksController'
      })
      /*.when('/list/:id', {
          templateUrl: 'template/detail.html',
          controller: 'DetailController'
      })*/
      .otherwise({
        redirectTo: '/flight/clicks'
      });
}]);