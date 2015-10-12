(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('treeService', treeService);

    treeService.$inject = ['$http', '$q', 'Tree'];

	/* @ngInject */
	function treeService($http, $q, Tree) {

        var service = {
            getTree : getTree
        };

		return service;

		function getTree(){
			var url = '/scripts/testdata/tree-sql.json';

			return $http.get(url).then(function(response) {
					if(typeof response.data === 'object') {
						return new Tree(response.data);
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
