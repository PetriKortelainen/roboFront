(function (){
    'use strict';

    angular
        .module('robottiFrontApp')
        .directive('roboQuestion', roboQuestion);

    roboQuestion.$inject = ['$rootScope', 'questionService'];

    function roboQuestion($rootScope, questionService){
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: '/views/robo-question.template.html',
            controller: function($scope, $element, $attrs) {
                $scope.question = questionService.getQuestionById($rootScope.currentQuestion);

                $scope.answerQuestion = function(answer){
                    $rootScope.currentQuestion = answer.id_next_question;
                    $scope.question = questionService.getQuestionById($rootScope.currentQuestion);
                }
            }

        };
        return directive;

    }
})
();
