// service
angular.module('zuiServices', []);

// search
zui.directive("ngSearch",function(){
	function searchBox(scope, element, attrs){
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

// chart
zui.directive("ngChart",function($http){

	function columnChart(scope, element, attrs){
		var url = attrs['url'],
			option = {
				title:null,
				xAxis:{
					categories:[]
				},
				yAxis:{
					title:null
				},
				series:[],
				credits:{
					enabled:false
				}
			};

		$http.get( url+"?t="+( +new Date() ) ).success(function(res) {
			var data = res.data;
			if( data.marker.length){
				angular.forEach(data.marker, function(value, key){
					data.series[0]['data'][value] = {
						"name" : "重跑消费",
						"y" : data.series[0]['data'][value],
						"color" : "orange"
					};
				});
			}
			option.xAxis.categories = data.categories;
			if( data.categories.length > 10 ){
				option.xAxis.labels = {
					rotation: -45,
	                align: 'right'
				};
			}
			option.series = data.series;
			$(element).highcharts( option );
		});
	}

	return {
      link:columnChart
    };
});