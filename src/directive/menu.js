
zui.directive("ngMenu",function($http){

	function link(scope, element, attrs){
		$http.get('api/menu.json').success(function(data) {
		    scope.menus = data.data.menus;
		 });
	}

	 return {
      link:link
    };
})