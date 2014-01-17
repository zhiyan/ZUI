zui.directive("ngMenu",function($http){

	function link(scope, element, attrs){
		var url = attrs['url'];
		$http.get(url).success(function(data) {
		    scope.menus = data.data.menus;
		 });
	}

	 return {
      link:link
    };
})