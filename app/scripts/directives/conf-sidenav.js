/**
 * @ngdoc overview
 * @name SideNav Directive
 * @description
 * #
 *
 * Draws sidenav into the DOM
 */

(function() {
    'use strict';

    angular
        .module('robottiFrontApp')
        .directive('confSidenav', confSidenav);

    confSidenav.$inject = ['$rootScope', '$location'];

    function confSidenav($rootScope) {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/conf-sidenav.template.html',
            controller: function($location) {
                // Returns active route and creates a variable to be used for styling in the html template
                $rootScope.isActive = function (viewLocation) { 
                    return viewLocation === $location.path();
                };
            }
        };
        return directive;
    }
})();
