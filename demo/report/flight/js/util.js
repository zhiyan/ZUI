// service
zui.value("$vars", {
    "dateOffset": 7,
    "searchSelect": [
        [{
            name: "网站名称"
        }, {
            name: "客户id"
        }, {
            name: "账户名称"
        }, {
            name: "客服",
            opa: "#customers"
        }, {
            name: "销售",
            opa: "#salers"
        }],
        [{
            name: "网站名称"
        }, {
            name: "域名"
        }, {
            name: "客户id"
        }, {
            name: "客服",
            opa: "#customers"
        }, {
            name: "销售",
            opa: "#salers"
        }],
        [{
            name: "网站名称"
        }, {
            name: "域名"
        }, {
            name: "客户id"
        }],
        [{
            name: "客户id"
        }, {
            name: "网站名"
        }]
    ]
});


// search
zui.factory("$search", function($http) {

    var keysDefault = ["scope", "customerType", "searchType", "terminalType", "incomeType", "salesType"],
        cbTable;

    function init($scope, config) {

        config.searchKeys = config.searchKeys || keysDefault;

        cbTable = config.cbTable || angular.noop;

        angular.forEach(config, function(value, key) {
            if (key !== 'cbTable')
                $scope[key] = value;
        });

        $http.get('/api/search.json', {
            "keys": config.searchKeys.join()
        }).success(function(res) {
            $scope.searchParam = res.data;
            // 加载完成回调
            getTable($scope);
            getChart($scope);
            // 查询
            $scope.submit = function() {
                param($scope);
                getTable($scope);
                getChart($scope);
            };
        });
    }

    function getChart($scope, cb) {
        var defaultCb,
            option = {
                title: null,
                xAxis: {
                    categories: []
                },
                yAxis: {
                    title: null
                },
                series: [],
                credits: {
                    enabled: false
                }
            };
        defaultCb = function(res) {
            if (!res) return;
            var data = res.data;
            if (data.marker.length) {
                angular.forEach(data.marker, function(value, key) {
                    data.series[0]['data'][value] = {
                        "name": "重跑消费",
                        "y": data.series[0]['data'][value],
                        "color": "orange"
                    };
                });
            }
            option.xAxis.categories = data.categories;
            if (data.categories.length > 10) {
                option.xAxis.labels = {
                    rotation: -45,
                    align: 'right'
                };
            }
            option.series = data.series;
            angular.element(".chart").highcharts(option);
        };
        cb = typeof cb === 'function' ? cb : defaultCb;
        $http.get($scope.chartUrl, {
            "params": $scope.search
        }).success(cb);
    }

    function getTable($scope, isPageTarget) {
        $http.get($scope.tableUrl, {
            "params": isPageTarget ? $scope.master : $scope.search
        }).success(function(res) {
            cbTable(res);
            if (isPageTarget) {
                $scope.setMaster();
            }
        });
    }

    function param($scope) {

        angular.forEach($scope.keys, function(name) {
            $scope.search[name] = angular.element("[name=" + name + "]:checked").map(function() {
                return this.value;
            }).get().join(",");
        });
    };
    return {
        "init": init,
        "getChart": getChart,
        "getTable": getTable,
        "param": param
    };
});

// page
zui.factory("$page", function() {

    function build($scope, page, cb) {
        $scope.totalItems = page.totalItems;
        $scope.currentPage = page.currentPage;
        $scope.maxSize = 5;
        $scope.setPage = function(pageNo) {
            $scope.master.page = pageNo;
            if (typeof cb === 'function') cb();
        };
    }

    return {
        "build": build
    };
});

//ng-toggle
zui.directive("ngToggle", function($http) {
    function toggle(scope, element, attrs) {
        scope.opation = $("#opation");
        scope.inputText = $("#input-select-text");
        scope.userList = $("#db-user-list");
        scope.inputVal = $("#input-val");
        scope.customers = $(".customer-list");
        scope.toggleShow = function() {
            scope.opation.show();
            event.stopPropagation();
        };
        scope.showCustomer = function(ele) {
            var $this = $(ele);
            if ($this.data("type") === "") {
                scope.setVal(ele);
                return;
            };
            scope.userList.show();
            scope.uslist = $($this.data("type"));
            scope.customers.hide();
            scope.opation.hide();
            scope.uslist.show();
            scope.inputText.text($(ele).text());
            scope.inputText.attr("data-value", $(ele).attr("data-id"));
            scope.uslist.find("span").bind("click", function() {
                scope.inputVal.val($(this).text());
                scope.uslist.hide();
                scope.userList.hide();
                event.stopPropagation();
            });
            event.stopPropagation();
        };
        scope.setVal = function(ele) {
            scope.userList.hide();
            scope.inputVal.val("");
            scope.inputVal.focus();
            scope.opation.hide();
            scope.inputText.text($(ele).text());
            scope.inputText.attr("data-value", $(ele).attr("data-id"));
        };
        $(document).not($("#selectBtn")).bind("click", function() {
            scope.opation.hide();
        });
        $("#closeBtn,#searchTable").bind("click", function() {
            scope.userList.hide();
        });
    }
    return {
        link: toggle
    };
});

// 弹窗
var ModalCtrl = function($scope, $modal, $log) {
    $scope.items = ['审批通过', '审批驳回'];

    $scope.open = function(target) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            resolve: {
                items: function() {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $(target).text(selectedItem);
        });
    };
};
var ModalInstanceCtrl = function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };
    $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};