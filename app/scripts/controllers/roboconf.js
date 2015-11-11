(function () {
'use strict';

angular
  .module('robottiFrontApp', ['ngRoute', 'ui.tree'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/conf.html',
        controller: 'postCtrl'
      })
      .when('/newtree', {
        templateUrl: 'views/posttree.html',
        controller: 'postCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('postCtrl', ['$scope', '$http', function($scope, $http) {

      $scope.sendData = function() {
        var temp = angular.toJson($scope.data);
        console.log('temp: ' + temp);
        var dataObj = temp.substring(1, temp.length-1);
        $http.post('localhost:8081/xxx', dataObj);
        console.log('sent: ' + dataObj);
      };

      $scope.remove = function($scope) {
        $scope.remove();
      };

      $scope.toggle = function($scope) {
        $scope.toggle();
      };

      $scope.newSubItem = function($scope) {
        if ($scope.collapsed) {
          $scope.toggle();
        }
        var nodeData = $scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id + '.' + (nodeData.nodes.length + 1),
          answerText: '',
          questionText: '',
          nodes: []
        });
      };

      $scope.data = [{
        'id': '1',
        'dialogName' : '',
        'questionText' : '',
        'nodes': []
      }];
    }]);
}());
