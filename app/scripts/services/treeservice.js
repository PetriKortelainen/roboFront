(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('treeService', treeService);

    treeService.$inject = ['$http', 'Question', '$q'];

	/* @ngInject */
	function treeService($http, Tree, $q) {

        var service = {
            getTrees : getTrees
        };

		return service;

		function getTrees(treeId){
			var url = 'url/'+treeId;

			return $http.get(url).then(function(response) {
					if(typeof response.data === 'object') {
						return response.data;
					} else {
						return $q.reject(response.data);
					}
				}, function(response) {
					return $q.reject(response.data);
				}
			);
		}
	}

})();
