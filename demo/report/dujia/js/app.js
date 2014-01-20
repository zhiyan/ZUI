// route
zui.config(['$routeProvider',function ($routeProvider) {
      $routeProvider
      .when('/accountBalance', {
        templateUrl: 'template/common.html',
        controller: 'AccountBalanceController'
      })
      .when('/multiClick', {
        templateUrl: 'template/common.html',
        controller: 'MultiClickController'
      })
      .when('/multiConsume', {
        templateUrl: 'template/common.html',
        controller: 'MultiConsumeController'
      })
      .when('/priceSetting', {
        templateUrl: 'template/common.html',
        controller: 'PriceSettingController'
      })
      .otherwise({
        redirectTo: '/accountBalance'
      });
}]);