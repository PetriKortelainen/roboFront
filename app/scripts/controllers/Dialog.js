var app = angular.module('robottiFrontApp', ['ngDialog']);

app.controller('DialogCtrl', function ($scope, ngDialog) {
	$scope.openQuestionForm = function() {
		ngDialog.openConfirm({template: 'dialogtest.html',

		}).then(
			function(value) {
				//You need to implement the saveForm() method which should return a promise object
				$scope.saveForm().then(
					function(success) {
						ngDialog.open({template: '<div class="ngdialog-message"> \
						  Tallennus onnistui.</div>',
							plain: 'true'
						});
					},
					function(error) {
						ngDialog.open({template: '<div class="ngdialog-message"> \
						  Tallennuksessa on tapahtunut virhe.</div>',
							plain: 'true'
						});
					}
				);
			},
			function(value) {
				//Cancel or do nothing
			}
		);
	};
});
