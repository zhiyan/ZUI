var zui = angular.module('zui',['ngRoute','ngResource','mainFilter','mainServices']);
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: 'route/list.html',
        controller: 'ListCtl'
      })
      .when('/list/:id', {
          templateUrl: 'route/detail.html',
          controller: 'DetailCtl'
      })
      .otherwise({
        redirectTo: '/list'
      });
}]);