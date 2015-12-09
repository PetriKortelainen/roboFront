(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('questionService', questionService);

	/* @ngInject */
	function questionService() {
		var tree;
		var service = {
			getQuestionById: getQuestionById,
			setTree: setTree
		};

		return service;

		function setTree(tree) {
			this.tree = tree;
		}

		function getQuestionById(id) {
			var question;
			angular.forEach(this.tree.questions, function (value) {
				if (value.questionId == id) {
					question = value;
				}
			});
			return question;
		}
	}

})();
