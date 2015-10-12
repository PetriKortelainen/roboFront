(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('answerService', answerService);

    answerService.$inject = ['$http', 'Question'];

	/* @ngInject */
	function answerService($http, Question) {
        var service = {
            insertAnswerByQuestionId : insertAnswerByQuestionId

        };
	}
})();
