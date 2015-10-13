'use strict';

angular
	.module('robottiFrontApp', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/posttree.html',
				controller: 'postCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

.controller('postCtrl', function($scope, $http) {
	$scope.postTree = function() {
		var data = $scope.tree
		console.log(data);
		$http.post('http://localhost:8080/manage-api/post/', data)
			.success(function(data, status) {
				//TODO
			})
	};
});
