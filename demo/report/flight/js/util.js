// service
zui.value("$vars", {
    "dateOffset": 7
});

// search
zui.factory("$search", function($http) {

    var keys = ["scope", "customerType", "searchType", "terminalType", "incomeType", "salesType"];

    function getKey(arr) {
        if ( !! arr) {
            return arr.join();
        } else {
            return keys.join();
        }
    }

    function init($scope, param) {
        var keys = getKey(param);
        $http.get('/api/search.json', {
            "keys": keys
        }).success(function(res) {
            $scope.searchKeys = keys.split(",");
            $scope.searchParam = res.data;
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

    function getTable($scope, cb, isPageTarget) {
        $http.get($scope.tableUrl, {
            "params": isPageTarget ? $scope.master : $scope.search
        }).success(function(res) {
            cb(res);
            if (isPageTarget) {
                $scope.setMaster();
            }
        });
    }
    return {
        "init": init,
        "getChart": getChart,
        "getTable": getTable
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
            scope.userList.find(".nav li").bind("click", function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                scope.uslist.find("li").removeClass("active");
                scope.uslist.find("[data-window='" + $(this).attr("data-target") + "']").addClass("active");
                event.stopPropagation();
            });
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

//弹窗
var ModalCtrl = function($scope, $modal, $log) {
    $scope.items = ['审批通过', '审批驳回'];

    $scope.open = function() {

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
            $scope.selected = selectedItem;
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