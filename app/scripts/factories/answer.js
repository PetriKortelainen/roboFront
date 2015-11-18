(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Answer', Answer);

	/* @ngInject */
	function Answer() {
		var Answer = function(data) {

			angular.extend(this, {
				answerOptionId: 0,
				text: '',
				orderIndex: 0,
				nextQuestionId: 0,
				session_id: null,

				toJson: toJson,
				toBackEnd: toBackEnd,
				setSessionId : setSessionId

			});
			angular.extend(this, data);

			if (data) {
				delete this.givenAnswers;
			}

		};

		return Answer;

		function toJson() {
			var data = angular.toJson(this);
			return data;
		}

		function toBackEnd() {
			var data = {};
			delete this.nextQuestionId;
			data.answer_option_id = this.answerOptionId;
			data.session_id = this.session_id;
			data = angular.toJson(data);
			console.log(data);
			return data;
		}

		function setSessionId(id){
			this.session_id = id;
		}

	}
})();
