(function() {
	'use strict';

	angular
		.module('robottiFrontApp')
		.directive('roboAvatar', roboAvatar);

	function roboAvatar() {
        var directive = {
                restrict: 'E',
                templateUrl: 'views/robo-avatar.template.html',
                controller: function($scope, $element, $attrs){
                } 
		};
		return directive;

	}
})
();