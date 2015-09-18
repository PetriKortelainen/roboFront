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

	RobotController.$inject = ['$scope', 'treeService'];

	/* @ngInject */
	function RobotController($scope, treeService) {

        $scope.init = function(){
			treeService.getTree().then(
				function (data) {
					if(data){
						$scope.tree = data;
					}
				}
			);
        };
        $scope.init();
	}
})();
