// service
angular.module('zuiServices', []);

// search
zui.directive("ngSearch", function() {
    function searchBox(scope, element, attrs) {
        scope.box = $("#search-opation");
        scope.icon = $(".glyphicon");
        scope.textInfo = $("#text");
        scope.box.find("tr:gt(2)").not(":last-child").hide();
        scope.flag = false;
        scope.showMore = function(target) {
            if (scope.flag) {
                scope.box.find("tr:gt(2)").not(":last-child").hide();
                scope.icon.removeClass("glyphicon-minus");
                scope.textInfo.text("更多筛选条件");
                scope.flag = false;
            } else {
                scope.box.find("tr").show();
                scope.icon.addClass("glyphicon-minus");
                scope.textInfo.text("收起");
                scope.flag = true;
            }

        };
    }

    return {
        link: searchBox
    };
});
//ng-toggle
zui.directive("ngToggle", function($http) {
    function toggle(scope, element, attrs) {
        scope.opation = $("#opation");
        scope.inputText = $("#input-select-text");
        scope.userList = $("#db-user-list");
        scope.customers = $("#customers");
        scope.inputVal = $("#input-val");
        scope.toggleShow = function() {
            scope.opation.show();
            event.stopPropagation();
        };
        scope.showCustomer = function() {
            scope.userList.show();
            scope.customers.show();
            scope.userList.find(".nav li").bind("click", function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                scope.customers.find("li").removeClass("active");
                scope.customers.find("[data-window='" + $(this).attr("data-target") + "']").addClass("active");
                event.stopPropagation();
            });
            scope.customers.find("span").bind("click", function() {
                scope.inputVal.val($(this).text());
                scope.customers.hide();
                scope.userList.hide();
                event.stopPropagation();
            });
            event.stopPropagation();
        }
        scope.opation.find("li").bind("click", function() {
            scope.opation.hide();
            scope.inputText.text($(this).text());
            scope.inputText.attr("data-value", $(this).attr("data-id"));
        });
        $(document).not($("#selectBtn")).bind("click", function() {
            scope.opation.hide();
        });
        $(document).not(scope.customers).bind("click", function() {
            scope.userList.hide();
            scope.customers.hide();
        });
    }
    return {
        link: toggle
    };
});
// chart
zui.directive("ngChart", function($http) {

    function columnChart(scope, element, attrs) {
        var url = attrs['url'],
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

        $http.get(url + "?t=" + (+new Date())).success(function(res) {
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
            $(element).highcharts(option);
        });
    }

    return {
        link: columnChart
    };
});