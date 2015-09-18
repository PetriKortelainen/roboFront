(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('treeService', treeService);

    treeService.$inject = ['$http', '$q'];

	/* @ngInject */
	function treeService($http, $q) {

        var service = {
            getTree : getTree
        };

		return service;

		function getTree(){
			var url = '/scripts/testdata/tree.json';

			return $http.get(url).then(function(response) {
					if(typeof response.data === 'object') {
						return response.data;
					} else {
						return $q.reject(response.data);
					}
				}, function(response) {
					//this is failsafe rejection
					return $q.reject(response.data);
				}
			);
		}
	}

})();
