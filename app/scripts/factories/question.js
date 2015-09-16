(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Question', Question);

	/* @ngInject */
	function Question() {
		var Question = function (data) {

			angular.extend(this, {
				questionId: 0,
				sessionId: 0,
				answerId: 0,
                state: 'TEST',
				toJson: toJson

			});
			angular.extend(this, data);
		};

		return Question;

		function toJson() {
			var data = angular.toJson(this);
			return data;
		}
	}
})();
