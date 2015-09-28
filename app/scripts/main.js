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

	RobotController.$inject = ['$scope', 'treeService', '$log', '$rootScope'];

	/* @ngInject */
	function RobotController($scope, treeService, $log, $rootScope) {

        $scope.init = function(){
			treeService.getTree().then(
				function (data) {
					$scope.tree = data;
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
