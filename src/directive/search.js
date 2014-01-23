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

            scope.chooseDate = function(offset, $event) {
                scope.dateOffset = offset;
                angular.element($event.target).addClass("cur").siblings().removeClass("cur");
                makeDate(scope);
            };

            scope.changeDate = function(type) {

                var fdate = moment(scope.search.fromdate),
                    tdate = moment(scope.search.todate);

                scope.dateOffset = "";

                if (type === 'from' && +fdate >= +tdate) {
                    scope.search.todate = fdate.add('day', 1).format(dateFormat);
                }
                if (type === 'to' && +fdate >= +tdate) {
                    scope.search.fromdate = tdate.subtract('day', 1).format(dateFormat);
                }
            };

        }

        return {
            "initDate": initDate
        };
    })();

    function searchBox(scope, element, attrs) {

        scope.search = {};

        // init date
        scope.dateOffset = attrs['date'];
        if (scope.dateOffset) {
            handleDate.initDate(scope, element);
        }

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

        }
    }

    return {
        link: searchBox
    };
});