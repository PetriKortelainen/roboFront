(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('answerService', answerService);

	answerService.$inject = ['$http', 'ADDRESS', 'Answer'];

	/* @ngInject */
	function answerService($http, ADDRESS, Answer) {
		var sessionId;
		var service = {
			postAnswer: postAnswer
		};

		return service;

		function postAnswer(answer) {
			if(sessionId){
				answer.setSessionId(sessionId);
			}
			$http({
				url: ADDRESS + 'Front/postClick',
				method: 'POST',
				data: answer.toBackEnd(),
				headers: {
					'Content-Type': 'application/json',
				}
			}).then(function (response) {
				sessionId = response.data.session_id;
			}, function (response) {
				console.log("Error");
			});
		}
	}
})();
