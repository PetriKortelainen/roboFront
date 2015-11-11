/**
 * @ngdoc overview
 * @name Main (and only) Controller
 * @description
 * #
 *
 * The only controller for the program. Gets data on init and handles error handling
 */

(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.controller('RobotController', RobotController);

	RobotController.$inject = ['$scope', 'treeService', '$log', '$rootScope', 'questionService', 'ngDialog'];

	/* @ngInject */
	function RobotController($scope, treeService, $log, $rootScope, questionService, ngDialog) {

			$scope.openQuestionForm = function() {
				ngDialog.openConfirm({template: 'dialogtest.html',

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


		$scope.toggle = true;

        $scope.init = function(){
			treeService.getTree().then(
				function (data) {
					questionService.setTree(data);
					$rootScope.currentQuestion = 'Q1';
				}
			).catch(function(fallback) {
				$log.error('Error while getting tree');
				$scope.$emit('DATA-ERROR');
			});
        };
		$scope.$on('DATA-ERROR', function(){
			$rootScope.dataError=true;
		});
        $scope.init();
	}
})();
