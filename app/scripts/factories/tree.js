(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Tree', Tree);

	Tree.$inject = ['Question', '$rootScope'];

	/* @ngInject */
	function Tree(Question, $rootScope) {
		var Tree = function(data) {
			angular.extend(this, {
				dialogId: 0,
				name: '',
				enabled: null,
				created: 0,
				questions: null,
				firstQuestionId: null

				//declare public functions here

			});
			angular.extend(this, data);

			if (data) {
				if (data.questions) {
					var entries = [];
					var ids = [];
					angular.forEach(data.questions, function(value) {
						var entry = new Question(value);
						ids.push(entry.questionId);
						entries.push(entry);
					});
					this.questions = entries;
					$rootScope.currentQuestion = this.firstQuestionId;
				}
			}

		};

		return Tree;

	}
})();
