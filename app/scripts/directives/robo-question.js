(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.directive('roboQuestion', roboQuestion);

	roboQuestion.$inject = ['$rootScope', 'questionService', 'ngDialog', 'answerService','$timeout'];

	function roboQuestion($rootScope, questionService, ngDialog, answerService, $timeout) {
		var directive = {
			restrict: 'E',
			scope: {},
			templateUrl: 'views/robo-question.template.html',
			controller: function($scope, $element, $attrs) {

				$scope.formOpen = false;

				$rootScope.$watch('question', function(val){
					$scope.question = val;
				});

				$scope.answerQuestion = function(answer) {
					$rootScope.currentQuestion = answer.nextQuestionId;
					answerService.postAnswer(answer);
					$scope.question = questionService.getQuestionById($rootScope.currentQuestion);
					if($scope.question){
						if($scope.question.answer_type == 'redirect') {
							console.log("REDIRECT HERE")
						}
					}
				}

				$scope.openQuestionForm = function() {
					if(!$scope.formOpen){
						$scope.startAni = false;
						$scope.formOpen = true;
						ngDialog.openConfirm({
							template: 'views/robo-dialog.template.html',
							scope: $scope

						});
					}
				};
			}

		};
		return directive;

	}
})
();
