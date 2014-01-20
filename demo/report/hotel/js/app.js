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
      .when('/multiDraft', {
        templateUrl: 'template/common.html',
        controller: 'MultiDraftController'
      })
      .when('/clickAnalyze', {
        templateUrl: 'template/common.html',
        controller: 'ClickAnalyzeController'
      })
      .when('/clickStepAnalyze', {
        templateUrl: 'template/common.html',
        controller: 'ClickStepAnalyzeController'
      })
      .when('/priceSetting', {
        templateUrl: 'template/common.html',
        controller: 'PriceSettingController'
      })
      .otherwise({
        redirectTo: '/accountBalance'
      });
}]);