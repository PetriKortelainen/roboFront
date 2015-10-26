(function (){
    'use strict';

    angular
        .module('robottiFrontApp')
        .directive('roboTree', roboTree);

    roboTree.$inject=['$rootScope', 'Question'];

    function roboTree($rootScope, Question){
        var directive = {
            restrict: 'E',
            templateUrl: 'views/robo-tree.template.html',
            controller: function($scope, $element, $attrs){

            }
        };
        return directive;

    }
})
();
