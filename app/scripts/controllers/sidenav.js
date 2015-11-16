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
