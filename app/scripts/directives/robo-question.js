(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.directive('roboQuestion', roboQuestion);

	roboQuestion.$inject = ['$rootScope', 'questionService', 'ngDialog', 'answerService', 'Answer', '$timeout'];

	function roboQuestion($rootScope, questionService, ngDialog, answerService, Answer, $timeout) {
		var directive = {
			restrict: 'E',
			scope: {},
			templateUrl: 'views/robo-question.template.html',
			controller: function($scope, $element, $attrs) {

				$scope.formOpen = false;
				var openModal = false;

				$rootScope.$watch('question', function(val){
					$scope.question = val;
				});

				$scope.answerQuestion = function(answer) {
					$rootScope.currentQuestion = answer.nextQuestionId;
					answerService.postAnswer(answer);
					$scope.question = questionService.getQuestionById($rootScope.currentQuestion);
					if($rootScope.currentQuestion){
						openModal = true;
					}
				}

				$scope.openQuestionForm = function() {
					if(!$scope.formOpen){
						if(openModal){
							$scope.startAni = false;
							$scope.formOpen = true;
							ngDialog.openConfirm({
								template: 'views/robo-dialog.template.html',
								scope: $scope
							});
						} else {
							$scope.startAni = false;
							$scope.formOpen = false;
						}

					}
				};

				$scope.submitContactInfo = function(contactInfo){
					var answer = new Answer();
					answer.textfield = contactInfo;
					answerService.postAnswer(answer);
					$scope.goodBye = true;
					$timeout(function () {
						$scope.startAni = false;
						$scope.formOpen = false;
						ngDialog.closeAll();
					}, 2000);
				};

			}

		};
		return directive;

	}
})
();
