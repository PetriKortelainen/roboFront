/**
 * @ngdoc overview
 * @name Main Controller
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

	RobotController.$inject = ['$scope', 'treeService', '$log', '$rootScope', 'questionService'];

	/* @ngInject */
	function RobotController($scope, treeService, $log, $rootScope, questionService) {
		$scope.init = function () {
			treeService.getTree().then(
				function (data) {
					questionService.setTree(data);
					$rootScope.question = questionService.getQuestionById($rootScope.currentQuestion);
				}
			).catch(function (fallback) {
				$log.error('Error while getting tree');
				$scope.$emit('DATA-ERROR');
			});
		};
		$scope.$on('DATA-ERROR', function () {
			$rootScope.dataError = true;
		});
		$scope.init();
	}
})();
