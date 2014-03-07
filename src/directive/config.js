// config for pagination
zui.constant("paginationConfig", {
    // rotate: true,
    itemsPerPage: 20,
    boundaryLinks: true,
    directionLinks: true,
    firstText: '首页',
    previousText: '上一页',
    nextText: '下一页',
    lastText: '尾页'
});

// ajax transformResponse 
// zui.config(['$httpProvider', function($httpProvider) {

//     var ruleHtml = '<div class="alert alert-danger"> <h3 style="margin:0;">您没有权限查看该页面</h3> </div>';
//     $httpProvider.defaults.transformResponse.push(function( data ){
//         if( typeof data === "object"){
//             if( data.ret === false ){
//                 angular.element("#main").html( ruleHtml );
//                 return "";
//             }
//         }
//         return data;
//     });

// }]);