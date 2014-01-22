// service
angular.module('zuiServices', []);

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