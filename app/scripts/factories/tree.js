(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Tree', Tree);

    Tree.$inject=['Question'];

	/* @ngInject */
	function Tree(Question) {
		var Tree = function (data) {
			angular.extend(this, {
                treeId : 0,
                question: null

			});
			angular.extend(this, data);
			
			if(data){
				if(data.question){
					this.question = new Question(data.question);
				}
			}
		};

		return Tree;

	}
})();
