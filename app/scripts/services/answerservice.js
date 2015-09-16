(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('answerService', answerService);

    answerService.$inject = ['$http', 'Question'];

	/* @ngInject */
	function answerService($http, Question) {
        var service = {
            insertAnswerByQuestionId : insertAnswerByQuestionId

        };
	}
})();
