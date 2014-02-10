// config for pagination
zui.constant("paginationConfig", {
    // rotate: true,
    itemsPerPage: 10,
    boundaryLinks: true,
    directionLinks: true,
    firstText: '首页',
    previousText: '上一页',
    nextText: '下一页',
    lastText: '尾页'
});
zui.constant("searchSelectFirst", [{
    name: "网站名称"
}, {
    name: "客户id"
}, {
    name: "账户名称"
}, {
    name: "客服",
    opa: "#customers"
}, {
    name: "销售",
    opa: "#salers"
}]);
zui.constant("searchSelectSecond", [{
    name: "网站名称"
}, {
    name: "域名"
}, {
    name: "客户id"
}, {
    name: "客服",
    opa: "#customers"
}, {
    name: "销售",
    opa: "#salers"
}]);
zui.constant("searchSelectThird", [{
    name: "网站名称"
}, {
    name: "域名"
}, {
    name: "客户id"
}]);
zui.constant("searchSelectFourth", [{
    name: "客户id"
}, {
    name: "网站名"
}]);