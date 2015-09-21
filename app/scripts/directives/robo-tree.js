(function (){
    'use strict';

    angular
        .module('robottiFrontApp')
        .directive('roboTree', roboTree);

    function roboTree(){
        var directive = {
            restrict: 'E',
            scope: {
                tree: '=tree',
            },
            templateUrl: '/views/robo-tree.template.html',
            controller: function($scope, $element, $attrs) {
                
            }
        };
        return directive;

    }
})
();
