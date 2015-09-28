(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Answer', Answer);

	/* @ngInject */
	function Answer() {
		var Answer = function (data) {

			angular.extend(this, {
                text:'',
				question: null,
				toJson: toJson

			});
			angular.extend(this, data);

		};

		return Answer;

		function toJson() {
			var data = angular.toJson(this);
			return data;
		}
	}
})();