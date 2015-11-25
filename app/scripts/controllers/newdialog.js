/**
 * @ngdoc overview
 * @name New Dialog Controller
 * @description
 * #
 *
 * Controller for newdialog.html
 */

(function () {
'use strict';

angular
  .module('robottiFrontApp', ['ngRoute', 'ui.tree'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/overview.html',
      })
      .when('/newtree', {
        templateUrl: 'views/newdialog.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('PostCtrl', ['$scope', '$http', function($scope, $http) {

      $scope.sendData = function() {
        var dataObj = angular.toJson($scope.data).slice(1, -1);
        $http.post('http://localhost:8081/manage-api/post/', dataObj)
          .success(function(){
            console.log('sent: ' + dataObj);
            toastr.success('Dialog created succesfully!');
            $scope.data = [{
              'id': '1',
              'dialogName' : '',
              'questionText' : '',
              'nodes': []
            }];
          });
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
