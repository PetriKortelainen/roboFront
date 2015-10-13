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
				id: '',
				text: '',
				enabled: null,
				answers: null,
				answer_type: '',
				//public functions declared here
				toJson: toJson

			});
			angular.extend(this, data);
			if (data) {
				if (data.answers) {
					var answers = [];
					angular.forEach(data.answers, function(value) {
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
