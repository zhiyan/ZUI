// service
angular.module('zuiServices', []);
zui.directive("ngSearch",function($http){
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