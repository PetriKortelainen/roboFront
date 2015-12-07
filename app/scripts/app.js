/**
 * @ngdoc overview
 * @name robottiFrontApp
 * @description
 * # robottiFrontApp, bootstraps the application
 *
 * Main module of the application.
 */
 var dev = "http://localhost:8081/";
 var prod = "api/";
angular
	.module('robottiFrontApp', [
		'ngDialog' //external dependencies here

	]).constant('ADDRESS', prod);
