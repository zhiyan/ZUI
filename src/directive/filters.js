// 比率
zui.filter('rate', function() {
  return function(input) {
    return (typeof input === 'string' || typeof input === "number") ? (input*100).toFixed(2) + "%" : "";
  };
});

// 数组和
zui.filter('total',function(){
	var sum = function( arr, key ){
		var total = 0;
		for(var i = 0,l=arr.length;i<=l-1;i++){
			total += !!key ? arr[i][key] : arr[i];
		}
		return total;
	};
	return function(input,key){
		return input.length ? sum(input,key) : input;
	};
});

// 首字母大写
zui.filter('capitalize', function() {
    return function(input) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    };
});