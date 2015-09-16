(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('treeService', treeService);

    treeService.$inject = ['$http', 'Question'];

	/* @ngInject */
	function treeService($http, Tree) {

        var service = {
            getTrees : getTrees
        };
	}

})();
