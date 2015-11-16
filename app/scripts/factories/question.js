(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Question', Question);

	Question.$inject = ['Answer'];

	/* @ngInject */
	function Question(Answer) {
		var Question = function(data) {

			angular.extend(this, {
				questionId: '',
				text: '',
				orderIndex: 0,
				answerOptions: null,
				answerType: '',
				//public functions declared here
				toJson: toJson

			});
			angular.extend(this, data);
			if (data) {
				if (data.answers) {
					var answers = [];
					angular.forEach(data.answerOptions, function(value) {
						var entry = new Answer(value);
						answers.push(entry);
					});
					this.answers = answers;
				}
			}
		};

		return Question;

		function toJson() {
			var data = angular.toJson(this);
			return data;
		}

	}
})();
