var zui = angular.module('zui',['ngRoute','ngResource','mainFilter','mainServices']);
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/list', {
        templateUrl: 'template/list.html',
        controller: 'ListCtl'
      })
      .when('/list/:id', {
          templateUrl: 'template/detail.html',
          controller: 'DetailCtl'
      })
      .otherwise({
        redirectTo: '/list'
      });
}]);