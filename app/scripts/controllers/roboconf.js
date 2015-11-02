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

    .controller('postCtrl', ['$scope', '$http', function ($scope, $http) {

      $scope.sendData = function() {
        var dataObj = JSON.stringify($scope.data);
        $http.post('localhost:8081/xxx', dataObj);
      };

      $scope.remove = function (scope) {
        scope.remove();
      };

      $scope.toggle = function (scope) {
        scope.toggle();
      };

      $scope.moveLastToTheBeginning = function () {
        var a = $scope.data.pop();
        $scope.data.splice(0, 0, a);
      };

      $scope.newSubItem = function ($scope) {
        var nodeData = $scope.$modelValue;
        nodeData.nodes.push({
          id: nodeData.id + '.' + (nodeData.nodes.length + 1),
          answertext: '',
          questiontext: '',
          nodes: []
        });
      };

      $scope.collapseAll = function () {
        $scope.$broadcast('collapseAll');
      };

      $scope.expandAll = function () {
        $scope.$broadcast('expandAll');
      };

      $scope.data = [{
        'id': '1',
        'answertext' : '',
        'questiontext' : '',
        'nodes': [
          {
            'id': '1.1',
            'nodes': [
              {
                'id': '1.1.1',
                'nodes': []
              }
            ]
          },
          {
            'id': '1.2',
            'nodes': []
          }
        ]
      }];
    }]);
}());
