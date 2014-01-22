// service
angular.module('zuiServices', []);

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
            scope.userList.show();
            scope.list = $(ele);
            scope.customers.hide();
            scope.list.show();
            scope.userList.find(".nav li").bind("click", function() {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                scope.list.find("li").removeClass("active");
                scope.list.find("[data-window='" + $(this).attr("data-target") + "']").addClass("active");
                event.stopPropagation();
            });
            scope.list.find("span").bind("click", function() {
                scope.inputVal.val($(this).text());
                scope.list.hide();
                scope.userList.hide();
                event.stopPropagation();
            });
            event.stopPropagation();
        }
        scope.opation.find("li").bind("click", function() {
            scope.inputVal.val("");
            scope.opation.hide();
            scope.inputText.text($(this).text());
            scope.inputText.attr("data-value", $(this).attr("data-id"));
        });
        $(document).not($("#selectBtn")).bind("click", function() {
            scope.opation.hide();
        });
        $(document).not(scope.list).bind("click", function() {
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