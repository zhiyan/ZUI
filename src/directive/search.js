// search
zui.directive("ngSearch", function() {

    // 日期处理
    var handleDate = (function() {

        var dateFormat = 'YYYY-MM-DD';

        function makeDate(scope) {
            scope.search.fromdate = moment().subtract('days', scope.dateOffset).format(dateFormat);
            scope.search.todate = moment().subtract('days', 1).format(dateFormat);
        }

        function initDate(scope, element) {

            makeDate(scope);

            scope.$watch("dateOffset", function(newValue) {
                if ( !!newValue ) makeDate(scope);
            });

            scope.$watch("search.fromdate", function() {
                var fdate = moment(scope.search.fromdate),
                    tdate = moment(scope.search.todate);
                if (+fdate > +tdate) {
                    scope.search.todate = fdate.format(dateFormat);
                }
            });

            scope.$watch("search.todate", function() {
                var fdate = moment(scope.search.fromdate),
                    tdate = moment(scope.search.todate);
                if (+fdate > +tdate) {
                    scope.search.fromdate = tdate.format(dateFormat);
                }
            });

        }

        return {
            "initDate": initDate
        };
    })();

    function link(scope, element, attrs) {

        var offset;

        scope.search = {};
        if (!scope.dateOffset) {
            scope.dateOffset = 0;
        }

        // init date
        handleDate.initDate(scope, element);

        if( !scope.searchDate ){
            delete scope.search.fromdate;
            delete scope.search.todate;
        }

        scope.origin = angular.copy(scope.search);

        scope.master = angular.copy(scope.search);


        offset = scope.dateOffset;

        scope.reset = function() {
            scope.search = angular.copy(scope.origin) || {};
            scope.dateOffset = offset;
            element.find("input:checkbox").prop("checked", false);
            element.find("input:radio.default").prop("checked",true);
            element.find("input:text:not([noreset])").val("");
        };

        scope.setMaster = function() {
            scope.master = angular.copy(scope.search) || {};
        };

        scope.submit = scope.submit || angular.noop;

    }

    return {
        link: link
    };
});