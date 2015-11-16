(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('answerService', answerService);

    answerService.$inject = ['$http'];

	/* @ngInject */
	function answerService($http) {
        var service = {
            postAnswer : postAnswer
        };

		return service;

		function postAnswer(answer){
			$http({
				url: 'http://localhost:8081/',
				method : 'POST',
				data: answer,
				headers : {
					'Content-Type': 'application/json',

				}
			}).then(function(response){

			}).catch(function(fallback){

			})
		}
	}
})();
