// search
zui.directive("ngSearch",function(){

	// 日期处理
	var handleDate = (function(){

		var dateFormat = 'YYYY-MM-DD';

		function makeDate( scope ){
			scope.search.fromdate = moment().subtract('days', scope.dateOffset).format( dateFormat );
			scope.search.todate =  moment().format( dateFormat );
		}

		function initDate( scope, element ){

			makeDate( scope );

			scope.$watch("dateOffset",function(newValue){
				if(!!newValue) makeDate( scope );
			});

			scope.$watch("search.fromdate",function(){
				var fdate = moment(scope.search.fromdate),
				 	tdate = moment(scope.search.todate);
				if( +fdate >= +tdate ){
					scope.search.todate = fdate.add('day',1).format( dateFormat );
				}
			});

			scope.$watch("search.todate",function(){
				var fdate = moment(scope.search.fromdate),
				 	tdate = moment(scope.search.todate);
				if( +fdate >= +tdate ){
					scope.search.fromdate = tdate.subtract('day',1).format( dateFormat );
				}
			});

		}

		return {
			"initDate" : initDate
		};
	})();

	function searchBox(scope, element, attrs){

		scope.search={};

		// init date
		if( scope.dateOffset ){
			handleDate.initDate( scope, element );
		}

	}

	return {
      link:searchBox
    };
});