/**
 * @ngdoc overview
 * @name Overview Controller
 * @description
 * #
 *
 * Controller for overview.html
 */

(function () {
  'use strict';

  angular
    .module('robottiFrontApp')
    .controller('OverviewCtrl', OverviewCtrl);

    OverviewCtrl.$inject = ['$scope',  '$http'];

    function OverviewCtrl($scope, $http) {
      // For production replace the url below with: /manage-api/get-dialogs/
      // For dev with backend(cors browser plugin needed): http://localhost:8081/manage-api/get-dialogs/
      // For dev without backend: scripts/testdata/get-dialogs.json
      var url = 'scripts/testdata/get-dialogs.json';
      // Get all dialogs from the DB and bind them to the scope, which is then used to print them out in overview.html
      $http.get(url)
        .success(function(response) {
          $scope.dialogs = response;
        });

      // Loop through scope, sum up active dialogs and calculates their visibility rate
      $scope.visibilityRate = function() {
        var enabledDialogs = 0;
        angular.forEach($scope.dialogs, function(row){
          // if row is enabled add 1 else 0
          enabledDialogs += row.enabled ? 1 : 0;
        });
        var rate = (100/enabledDialogs).toFixed(0) + ' %';
      return rate;
      };

      // Change the enabled status of a dialog (will the dialog be visible to the end user)
      $scope.changeEnabled = function($scope) {
        var gUrl = 'http://localhost:8081/manage-api/activate/' + $scope.row.id;
        $http.get(gUrl)
          .success(function(response) {
            console.log('success: ' + response);
          });
      };
    }
}());
