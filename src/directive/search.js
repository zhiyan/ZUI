// search
zui.directive("ngSearch",function(){

	// 日期处理
	var handleDate = (function(){

		function bindChange( ipt, element, rel ){
			ipt.change(function(){
				var value = moment( ipt.val() ),
					relValue = moment( rel.val() ),
					isFrom = rel.is(".date-to");

				element.find(".search-quick-date button").removeClass("cur");

				if( isFrom && +value > +relValue ){
					rel.val(  value.add('day',1).format('YYYY-MM-DD') );
				}
				if( !isFrom && +value <= +relValue ){
					rel.val(  value.subtract('days', 1).format('YYYY-MM-DD') );
				}
			});
		}

		function initDate( scope, element ){
			var offset = scope.dateOffset,
				btn = element.find(".search-quick-date button"),
				iptFrom = element.find(".date-from"),
				iptTo = element.find(".date-to");

			scope.search.fromdate = moment().subtract('days', offset).format('YYYY-MM-DD');
			scope.search.todate =  moment().format('YYYY-MM-DD');


			scope.chooseDate = function( offset, $event ){
				scope.dateOffset = offset;
				angular.element($event.target).addClass("cur").siblings().removeClass("cur");
				scope.search.fromdate = moment().subtract('days', offset).format('YYYY-MM-DD');
				scope.search.todate =  moment().format('YYYY-MM-DD');
			};

			scope.changeDate = function(type){

				var fdate = moment(scope.search.fromdate),
					tdate = moment(scope.search.todate);

				scope.dateOffset = "";

				if( type === 'from' && +fdate >= +tdate ){
					scope.search.todate = fdate.add('day',1).format('YYYY-MM-DD');
				}
				if( type === 'to' && +fdate >= +tdate ){
					scope.search.fromdate = tdate.subtract('day',1).format('YYYY-MM-DD');
				}
			};

		}

		return {
			"initDate" : initDate
		};
	})();

	function searchBox(scope, element, attrs){

		scope.search={};

		// init date
		scope.dateOffset = attrs['date'];
		if( scope.dateOffset ){
			handleDate.initDate( scope, element );
		}

		scope.box = $("#search-opation");
		scope.icon = $(".glyphicon");
		scope.box.find("tr:gt(2)").not(":last-child").hide();
		scope.flag = false;
		scope.showMore = function(target){
			if(scope.flag){
				scope.box.find("tr:gt(2)").not(":last-child").hide();
				scope.icon.removeClass("glyphicon-minus");
				scope.flag = false;
			} else {
				scope.box.find("tr").show();
				scope.icon.addClass("glyphicon-minus");
				scope.flag = true;
			}
			
		}
	}

	return {
      link:searchBox
    };
});