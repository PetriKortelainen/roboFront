(function () {
	'use strict';

	angular
		.module('robottiFrontApp')
		.factory('Answer', Answer);

	/* @ngInject */
	function Answer() {
		var Answer = function (data) {

			angular.extend(this, {
				answer_id: '',
                text:'',
				order_index: null,
				id_next_question: null,
				sets_user_type: null,

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
