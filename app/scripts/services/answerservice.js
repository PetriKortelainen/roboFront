(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('answerService', answerService);

    answerService.$inject = ['$http'];

	/* @ngInject */
	function answerService($http) {
        var service = {
            insertAnswerByQuestionId : insertAnswerByQuestionId
        };

		function insertAnswerByQuestionId(data, id){
			$http({
				url: 'http://localhost:8081/',
				method : 'POST',
				data: data.toJson(),
				headers : {
					'Content-Type': 'application/json',

				}
			}).then(function(response){

			}).catch(function(fallback){

			})
		}
	}
})();
