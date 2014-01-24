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
        value.isShow = false;
        angular.forEach(value.data,function(v,k){
          if( v.url === currentUrl ){
            value.isShow =true;
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
        $(this).find(".glyphicon ").toggleClass("glyphicon-plus glyphicon-minus");
        $(this).siblings(".menu-c").slideToggle();
        $(this).parent().siblings().find(".menu-c:visible").slideToggle();
        $(this).parent().siblings().find(".glyphicon-minus").toggleClass("glyphicon-plus glyphicon-minus");
      })
      .on("click",".menu-c a",function(){
        currentUrl = $(this).attr("href");
        document.title = "QBOSS-"+$(this).attr("title");
      });
  }

   return {
      link:link
    };
});