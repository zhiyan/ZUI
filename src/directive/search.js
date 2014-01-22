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

		function quickDate( date, element ){
			var btn = element.find(".search-quick-date button"),
				iptFrom = element.find(".date-from"),
				iptTo = element.find(".date-to");

			if( element.find(".search-quick-date").length ){
				bindChange( iptFrom, element, iptTo );
				bindChange( iptTo, element, iptFrom );

				btn.bind("click",function(){
					var elem = angular.element(this),
						date = elem.attr("rel");
					elem.addClass("cur").siblings().removeClass("cur");
					initDate(date,element);
				});
				btn.filter("[rel="+date+"]").trigger("click");
			}
		}

		function initDate( date, element ){
			var iptFrom = element.find(".date-from"),
				iptTo = element.find(".date-to");

				iptFrom.val( moment().subtract('days', date).format('YYYY-MM-DD') );
				iptTo.val( moment().format('YYYY-MM-DD') );
		}

		return {
			"initDate" : initDate,
			"quickDate" : quickDate
		};
	})();

	function searchBox(scope, element, attrs){

		// init date
		var date = attrs['date'];
		if( date ){
			// handleDate.initDate( date, element );
			handleDate.quickDate( date, element );
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