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

	RobotController.$inject = ['$scope','Question'];

	/* @ngInject */
	function RobotController($scope, Question) {

        $scope.init = function(){

        };
        $scope.init();
	}
})();
