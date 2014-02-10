// search
zui.directive("ngSearch", function() {

    // 日期处理
    var handleDate = (function() {

        var dateFormat = 'YYYY-MM-DD';

        function makeDate(scope) {
            scope.search.fromdate = moment().subtract('days', scope.dateOffset).format(dateFormat);
            scope.search.todate = moment().format(dateFormat);
        }

        function initDate(scope, element) {

            makeDate(scope);

            scope.$watch("dateOffset", function(newValue) {
                if ( !!newValue ) makeDate(scope);
            });

            scope.$watch("search.fromdate", function() {
                var fdate = moment(scope.search.fromdate),
                    tdate = moment(scope.search.todate);
                if (+fdate >= +tdate) {
                    scope.search.todate = fdate.add('day', 1).format(dateFormat);
                }
            });

            scope.$watch("search.todate", function() {
                var fdate = moment(scope.search.fromdate),
                    tdate = moment(scope.search.todate);
                if (+fdate >= +tdate) {
                    scope.search.fromdate = tdate.subtract('day', 1).format(dateFormat);
                }
            });

        }

        return {
            "initDate": initDate
        };
    })();

    function searchBox(scope, element, attrs, $scope) {

        var offset;

        scope.search = {};
        if (!scope.dateOffset) {
            scope.dateOffset = 0;
        }

        // init date
        handleDate.initDate(scope, element);

        scope.origin = angular.copy(scope.search);

        scope.master = angular.copy(scope.search);


        offset = scope.dateOffset;

        scope.reset = function() {
            scope.search = angular.copy(scope.origin) || {};
            scope.dateOffset = offset;
            element.find("input").prop("checked", false);
        };

        scope.setMaster = function() {
            scope.master = angular.copy(scope.search) || {};
        };

        // scope.shortSelect = function(ele) {
        //     var curEle = $(ele);
        //     if (curEle.data("modle") === "") {
        //         return;
        //     }
        //     scope.flag = $(ele).prop("checked");
        //     $("[data-value = '" + curEle.data("modle") + "']").prop("checked", scope.flag);
        // };

        scope.submit = scope.submit || angular.noop;

        // 加载完成回调
        if (typeof scope.loaded === 'function') {
            scope.loaded();
            scope.loaded = null;
        }

    }

    return {
        link: searchBox
    };
});