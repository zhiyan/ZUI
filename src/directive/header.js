zui.controller('headerController',function($scope,$cookies,$http,$location) {
	$scope.userName = $cookies.userName;
    function DelCookie(name)
    {
    var exp = new Date();
    exp.setTime (exp.getTime() - 1);
    var cval = GetCookie (name);
    document.cookie = name + "=" + cval + "; domain=.qunar.com;expires="+ exp.toGMTString();
    }
    
    $("header .logout").click(function(){
        $http.jsonp("https://qsso.corp.qunar.com/api/logout.php?callback=JSON_CALLBACK").success(function(res){
            if( !!res.ret ){
                window.location.href="/";
            }
        });
        // document.cookie = "userName=;domain=.qunar.com;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        return false;
    });
});