zui.directive("ngMenu", function($http) {

    function link(scope, element, attrs) {
        var url = attrs['url'];
        $http.get(url).success(function(data) {
            scope.menus = data.data.menus;
        });
        scope.showMenu = function(target) {
            if ($(target).attr("flag") === "true") {
                $(target).nextAll(".menu-c").hide();
                $(target).find(".glyphicon").removeClass("glyphicon-minus");
                $(target).attr("flag", false);
            } else {
                $(target).nextAll(".menu-c").show()
                $(target).find(".glyphicon").addClass("glyphicon-minus");
                $(target).attr("flag", true);
            }
        }
        scope.menuBg = function(target) {
            $(target).addClass("menu-active");
            $(target).siblings().removeClass("menu-active");
        }
    }

    return {
        link: link
    };
});