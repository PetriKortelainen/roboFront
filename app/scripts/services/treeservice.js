(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('treeService', treeService);

	treeService.$inject = ['$http', '$q', 'Tree', 'ADDRESS'];

	/* @ngInject */
	function treeService($http, $q, Tree, ADDRESS) {

		var service = {
			getTree: getTree
		};

		return service;

		function getTree() {
			var url = ADDRESS + 'Front/getTree';

			return $http.get(url).then(function (response) {
				if (typeof response.data[0] === 'object') {
					var tree = new Tree(response.data[0]);
					console.log(tree);
					return tree;
				} else {
					return $q.reject(response.data);
				}
			}, function (response) {
				//this is failsafe rejection
				return $q.reject(response.data);
			});
		}
	}

})();
