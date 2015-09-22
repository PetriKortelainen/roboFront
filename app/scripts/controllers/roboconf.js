'use strict';

angular
  .module('robottiFrontApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/newtree.html',
        controller: 'qManagementCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.controller('qManagementCtrl', ['$scope', 'questionTrees',
  // grab the questionTrees factory into the controller
  function($scope, questionTrees) {

    // add the questionTrees array to the scope
    $scope.trees = questionTrees;

    // a function to create new trees; called by ng-submit from the html-page
    $scope.addTree = function() {
      $scope.trees.$add({
        // TODO: new questiontrees will go here
        content: $scope.tree
      });

      // reset the tree input
      $scope.tree = '';
    };
  }
]);
