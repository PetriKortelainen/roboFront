(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.service('questionService', questionService);

    questionService.$inject = ['Tree', '$rootScope', 'Question', '$q'];

	/* @ngInject */
	function questionService(Tree, $rootScope, Question, $q) {
		var tree;
        var service = {
            getQuestionById : getQuestionById,
			setTree : setTree
        };

		return service;

		function setTree(tree){
			this.tree = tree;
		}

		function getQuestionById(id, tree){
			var question;
			angular.forEach(this.tree.questions, function(value){
				if(value.questionId == id){
					question = value;
				}
			});
			return question;
		}
	}

})();
