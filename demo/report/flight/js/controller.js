// 账户余额
zui.controller('AccountBalanceController', function($scope, $routeParams, $http, $vars, $search, $page, searchSelectFirst) {
    // table回调渲染
    var cbTable = function(res) {
        $scope.title = ['', '客户ID', '网站ID', '网站地址', '客户类型', '终端类型', '客服', '销售'];
        $scope.list = res.data.flights;
        $page.build($scope, res.data.pager, function() {
            $search.getTable($scope, cbTable, true);
        });
    };
    $scope.pageTitle = "机票账户余额";

    $scope.chartUrl = "/api/chart.json";

    $scope.tableUrl = '/api/table.json';

    $scope.searchBox = true;

    $scope.searchSelect = searchSelectFirst;
    $search.init($scope);
    $scope.loaded = function() {
        $search.getTable($scope, cbTable);
        $search.getChart($scope);
    };

    $scope.submit = function() {
        $search.getTable($scope, cbTable);
        $search.getChart($scope);
    };

});

// 多日点击
zui.controller('MultiClickController', function($scope, $vars, searchSelectSecond) {
    $scope.pageTitle = "多日点击";
    $scope.searchSelect = searchSelectSecond;
    $scope.searchBox = true;
    $scope.searchDay = true;
    $scope.data = [];
    $scope.dateOffset = $vars.dateOffset;
    // List.query(function (response) {
    //     angular.forEach(response.list, function (item) {
    //         if (item.id) {
    //             $scope.data.push(item.id);
    //         }
    //     });
    // });
    $scope.chartUrl = "/api/chart.json";
});

// 多日消费
zui.controller('MultiConsumeController', function($scope, $vars, $routeParams, $http, searchSelectSecond) {
    $scope.pageTitle = "多日消费";
    $scope.chartUrl = "/api/chart.json";
    $scope.searchBox = true;
    $scope.searchDay = true;
    $scope.searchSelect = searchSelectSecond;
    $scope.dateOffset = $vars.dateOffset;
});

// 多日出票
zui.controller('MultiDraftController', function($scope, $vars, $routeParams, $http, searchSelectSecond) {
    $scope.chartUrl = "/api/chart.json";
    $scope.pageTitle = "多日出票";
    $scope.searchBox = true;
    $scope.searchDay = true;
    $scope.dateOffset = $vars.dateOffset;
    $scope.searchSelect = searchSelectSecond;
    $http.get('/api/table.json').success(function(data) {
        $scope.title = ['客户ID', '网站ID', '网站地址', '客户类型', '终端类型', '客服', '销售'];
        $scope.dbTitle = [{
            date: "2012-11-20",
            count: "出票数量",
            price: "票面额"
        }, {
            date: "2012-11-30",
            count: "出票数量",
            price: "票面额"
        }];
        $scope.list = data.data.flights;
    });
});

// 点击分析
zui.controller('ClickAnalyzeController', function($scope, $vars, $routeParams, $http, searchSelectSecond) {
    $scope.pageTitle = "点击分析";
    $scope.searchBox = true;
    $scope.searchDay = true;
    $scope.dateOffset = $vars.dateOffset;
    $scope.searchSelect = searchSelectSecond;
});

// 点击阶梯分析
zui.controller('ClickStepAnalyzeController', function($scope, $vars, $routeParams, $http, searchSelectThird) {
    $scope.pageTitle = "点击阶梯分析";
    $scope.navTab = true;
    $scope.searchBox = true;
    $scope.searchDay = true;
    $scope.dateOffset = $vars.dateOffset;
    $scope.searchSelect = searchSelectThird;
    $http.get('/api/table.json').success(function(data) {
        $scope.title = ['', 'otaPay', 'pay', 'insuranceId', 'insuranceAccountId', 'payDate', 'profit', 'payed'];
        $scope.list = data.data.flights;
    });
});

// Top航线上传
zui.controller('TopAirUploadController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "Top航线上传";
    $scope.upfile = true; //上传
});

// Top航线列表
zui.controller('TopAirListController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "Top航线列表";
    $scope.chartUrl = "/api/chart.json";
    $http.get('/api/table.json').success(function(data) {
        $scope.title = ['客户ID', '网站ID', '网站地址', '客户类型', '终端类型', '客服', '销售', "测试"];
        $scope.list = data.data.flights;
    });
});

// Top航线消费
zui.controller('TopAirConsumeController', function($scope, $routeParams, $http) {
    $scope.chartUrl = "/api/chart.json";
    $scope.pageTitle = "Top航线消费";
    $http.get('/api/table.json').success(function(data) {
        $scope.title = ['客户ID', '网站ID', '网站地址', '客户类型', '终端类型', '客服', '销售', "测试"];
        $scope.list = data.data.flights;
    });
});

// CPC价格配置
zui.controller('CpcPriceSettingController', function($scope, $routeParams, $http, searchSelectFourth) {
    $scope.pageTitle = "CPC价格配置";
    $scope.searchBox = true;
    $scope.searchPrice = true;
    $scope.oper = true;
    $scope.chartUrl = "/api/chart.json";
    $scope.searchSelect = searchSelectFourth;
    $http.get('/api/table.json').success(function(data) {
        $scope.title = ['客户ID', '网站ID', '网站地址', '客户类型', '终端类型', '客服', '销售', "测试", "操作"];
        $scope.list = data.data.flights;
    });
});

// 航空公司舱位票面额汇总
zui.controller('CompanyCollectController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "航空公司舱位票面额汇总";
});

// 业务视角收入报表
zui.controller('BussinessIncomeController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "业务视角收入报表";
});

// 航空公司CPA总额阶梯票面额汇总
zui.controller('CompanyCpaCollectController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "航空公司CPA总额阶梯票面额汇总";
});

// CPC月结报表
zui.controller('CpcMonthController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "CPC月结报表";
});
// CPA月结报表
zui.controller('CpaMonthController', function($scope, $routeParams, $http) {
    $scope.pageTitle = "CPA月结报表";
});