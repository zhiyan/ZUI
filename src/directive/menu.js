zui.directive("ngMenu",function($http){

	function link(scope, element, attrs){
		var url = attrs['url'];
		scope.open = false;
		$http.get(url).success(function(data) {
		    scope.menus = data.data.menus;
		});
		scope.showMenu = function(target){
			if(scope.open) {
				$(target).nextAll(".menu-c").hide();
				$(target).find(".glyphicon").removeClass("glyphicon-minus");
				scope.open = false;
			} else {
				$(target).nextAll(".menu-c").show()
				$(target).find(".glyphicon").addClass("glyphicon-minus");
				scope.open = true;
			}
		}
		scope.menuBg = function(target){
			$(target).addClass("menu-active");
			$(target).siblings().removeClass("menu-active");
		}
	}

	 return {
      link:link
    };
});