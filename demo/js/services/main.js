angular.module('mainServices', []).
  value('version', '0.1').
  factory('List', function($resource) {
  	return $resource('api/:id.json', {}, {
  		query: {
  			method: 'GET',
  			params: {
  				id: 'list'
  			}
  		}
  	});
  });