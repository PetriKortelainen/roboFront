(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.directive('roboQuestion', roboQuestion);

	roboQuestion.$inject = ['$rootScope', 'questionService', 'ngDialog'];

	function roboQuestion($rootScope, questionService, ngDialog) {
		var directive = {
			restrict: 'E',
			scope: {},
			templateUrl: 'views/robo-question.template.html',
			controller: function($scope, $element, $attrs) {
				$scope.question = questionService.getQuestionById($rootScope.currentQuestion);

				$scope.answerQuestion = function(answer) {
					$rootScope.currentQuestion = answer.id_next_question;
					$scope.question = questionService.getQuestionById($rootScope.currentQuestion);
					if($scope.question.answer_type == 'redirect') {
						console.log("REDIRECT HERE")
					}

				}

				$scope.openQuestionForm = function() {
					ngDialog.openConfirm({
						template: 'views/robo-question.template.html',
						scope: $scope

					}).then(
						function(value) {
							//You need to implement the saveForm() method which should return a promise object
							$scope.saveForm().then(
								function(success) {
									ngDialog.open({template: '<div class="ngdialog-message"> \
									  Tallennus onnistui.</div>',
										plain: 'true'
									});
								},
								function(error) {
									ngDialog.open({template: '<div class="ngdialog-message"> \
									  Tallennuksessa on tapahtunut virhe.</div>',
										plain: 'true'
									});
								}
							);
						},
						function(value) {
							//Cancel or do nothing
						}
					);
				};
			}

		};
		return directive;

	}
})
();
