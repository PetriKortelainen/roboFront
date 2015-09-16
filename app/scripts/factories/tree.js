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
                id : 0,
                allQuestions: null

			});
			angular.extend(this, data);

            if(data.allQuestions) {
                var questions = [];
                angular.forEach(data.allTrees, function (value) {
                    var question = new Question(value);
                    questions.push(question);
                });
                this.allQuestions = questions;
            }
		};

		return Tree;

	}
})();
