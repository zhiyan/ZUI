zui.directive("ngMenu",function($http){

	function link(scope, element, attrs){
		var url = attrs['url'];
		scope.open = false;
		$http.get(url).success(function(data) {
		    scope.menus = data.data.menus;
		});
		scope.showMenu = function(target){
			scope.open = scope.open ? false : true;
			if(scope.open) {
				$(target).nextAll(".menu-c").hide();
				$(target).find(".glyphicon").removeClass("glyphicon-minus");
			} else {
				$(target).nextAll(".menu-c").show()
				$(target).find(".glyphicon").addClass("glyphicon-minus");
			}
		}
	}

	 return {
      link:link
    };
});