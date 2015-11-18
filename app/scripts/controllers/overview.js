(function () {
  'use strict';

  angular
    .module('robottiFrontApp')
    .controller('OverviewCtrl', OverviewCtrl);

    OverviewCtrl.$inject = ['$scope', '$http'];
    /* 
    Overview - overview.html
    */
    function OverviewCtrl($scope, $http) {
      // for production replace the url below with: /manage-api/get-dialogs/
      // for dev with backend(cors browser plugin needed): http://localhost:8081/manage-api/get-dialogs/
      // for dev without backend: scripts/testdata/get-dialogs.json
      var url = 'scripts/testdata/get-dialogs.json';

      // Get all dialogs from DB and bind them to the scope
      $http.get(url)
        .success(function(response) {
          $scope.dialogs = response;
        });

      $scope.changeEnabled = function($scope) {
        var gUrl = 'http://localhost:8081/manage-api/activate/' + $scope.row.id;
        console.log('gurl: ' + gUrl);
        $http.get(gUrl)
          .success(function(response) {
            console.log('success: ' + response);
          });
      };
    }
}());
