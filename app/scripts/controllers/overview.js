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
      $http.get('scripts/testdata/get-dialogs.json')
        .success(function(response) {
          $scope.dialogs = response;
        });
    }
}());
