/**
 * @ngdoc overview
 * @name Side Nav Controller
 * @description
 * #
 *
 * Controls the side navigation in management.html
 */

(function () {
    'use strict';

    angular
        .module('robottiFrontApp')
        .controller('SideNavCtrl', SideNavCtrl);

    SideNavCtrl.$inject = ['$scope', '$location'];

    function SideNavCtrl($scope, $location) { 
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    }
})();
