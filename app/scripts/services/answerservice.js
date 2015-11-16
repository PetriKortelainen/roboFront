(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('answerService', answerService);

    answerService.$inject = ['$http', 'ADDRESS','Answer'];

	/* @ngInject */
	function answerService($http, ADDRESS, Answer) {
        var service = {
            postAnswer : postAnswer
        };

		return service;

		function postAnswer(answer){
			console.log(answer.toBackEnd());
			$http({
				url: ADDRESS+'FrontTEST/postClick',
				method : 'POST',
				data: answer.toBackEnd(),
				headers : {
					'Content-Type': 'application/json',
				}
			}).then(function(response){
				console.log(response);
			}, function(response){
				console.log("Error");
				console.log(response);
			});
		}
	}
})();
