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
