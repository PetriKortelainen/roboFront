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
                dialogId : 0,
				name: '',
				enabled: null,
				created: 0,
                questions: null,

				//declare public functions here

			});
			angular.extend(this, data);

			if(data){
				if(data.questions){
					var entries = [];
					angular.forEach(data.questions, function(value) {
						var entry = new Question(value);
						entries.push(entry);
					});
					this.questions = entries;
				}
			}
		};

		return Tree;

	}
})();
