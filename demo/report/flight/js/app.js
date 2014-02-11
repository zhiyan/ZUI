// route
zui.config(['$routeProvider',
    function($routeProvider) {
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
                templateUrl: 'template/days.html',
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
            .when('/topAirUpload', {
                templateUrl: 'template/upfile.html',
                controller: 'TopAirUploadController'
            })
            .when('/topAirList', {
                templateUrl: 'template/common.html',
                controller: 'TopAirListController'
            })
            .when('/topAirConsume', {
                templateUrl: 'template/common.html',
                controller: 'TopAirConsumeController'
            })
            .when('/cpcPriceSetting', {
                templateUrl: 'template/common.html',
                controller: 'CpcPriceSettingController'
            })
            .when('/companyCollect', {
                templateUrl: 'template/common.html',
                controller: 'CompanyCollectController'
            })
            .when('/bussinessIncome', {
                templateUrl: 'template/common.html',
                controller: 'BussinessIncomeController'
            })
            .when('/companyCpaCollect', {
                templateUrl: 'template/common.html',
                controller: 'CompanyCpaCollectController'
            })
            .when('/cpcMonth', {
                templateUrl: 'template/common.html',
                controller: 'CpcMonthController'
            })
            .when('/cpaMonth', {
                templateUrl: 'template/common.html',
                controller: 'CpaMonthController'
            })
            .otherwise({
                templateUrl: '/common/404.html'
            });
    }
]);