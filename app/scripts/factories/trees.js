(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Trees', Trees);

	Trees.$inject=['Tree'];

	/* @ngInject */
	function Trees(Tree) {
		var Trees = function (data) {
			angular.extend(this, {
                id : 0,
                allTrees : null
			});
			angular.extend(this, data);

            if(data.allTrees) {
                var trees = [];
                angular.forEach(data.allTrees, function (value) {
                    var tree = new Tree(value);
                    trees.push(tree);
                });
                this.allTrees = trees;
            }
		};

		return Trees;
	}
})();
