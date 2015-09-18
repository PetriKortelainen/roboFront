(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Question', Question);

	Question.$inject = ['Answer'];

	/* @ngInject */
	function Question(Answer) {
		var Question = function (data) {

			angular.extend(this, {
				questionId: 0,
				questionText: '',
				type:'',
				answers: null,

				//public functions declared here
				toJson: toJson

			});
			angular.extend(this, data);
			if(data) {
				if(data.answers) {
					var answers = [];
					angular.forEach(data.answers, function (value) {
						var entry = new Answer(value);
						answers.push(recursivelyGoThroughData(entry));
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

		//this function (or method persay) inits Question itself,
		//so it's recursively going through data / Tree
		function recursivelyGoThroughData(answer){
			if(answer.question){
				answer.question = new Question(answer.question);
			}
			return answer;
		}
	}
})();
