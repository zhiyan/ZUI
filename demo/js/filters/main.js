angular.module('mainFilter', []).
	filter('formatMoney', function() {
	  return function(input) {
	    return typeof input === 'undefined' ? "" : input.toFixed(2)
	  };
	});