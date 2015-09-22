'use strict';
angular
    .module('robottiFrontApp')
        .factory('questionTrees', ['$firebaseArray',
  function($firebaseArray) {
    // create a reference to the database location where we store our data
    var ref = new Firebase('https://myyntirobotti.firebaseio.com');

    // use AngularFire to create a synchronized array
    return $firebaseArray(ref);
  }
]);
