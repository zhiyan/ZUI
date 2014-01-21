zui.directive("ngMenu",function($http,$location){

  var host = $location.host(),
      url = $location.absUrl(),
      rUrl = new RegExp(".*"+host);
      currentUrl = url.replace(rUrl,"");

  function link(scope, element, attrs){
    var url = attrs['url'];

    $http.get(url+"?t="+( +new Date() ) ).success(function(res) {
      var menus = res.data.menus,
          current;
      angular.forEach(menus, function(value, key){
        value.style = "";
        angular.forEach(value.data,function(v,k){
          if( v.url === currentUrl ){
            value.style = "display:block;";
          }
        });
      });
      scope.menus = menus;
    });

    // 当前class
    scope.getClass = function(one){
      if( one.url === currentUrl ){
        return "menu-active";
      }
    }

    $(element)
      .on("click",".menu-t",function(){
        $(this).siblings(".menu-c").slideToggle();
        $(this).parent().siblings().find(".menu-c:visible").slideToggle();
      })
      .on("click",".menu-c a",function(){
        currentUrl = $(this).attr("href");
      });
  }

   return {
      link:link
    };
});