/**
 * @ngdoc overview
 * @name robottiFrontApp
 * @description
 * # Robot application is the front application of Myyntirobotti
 * # It has 3 parts, Dialog, Management and Configuration
 *
 * Main module of the application. This bootstraps the application.
 */
 var dev = "http://localhost:8081/";
 var prod = "api/";
angular
	.module('robottiFrontApp', [
		'ngDialog' //external dependencies here

	]).constant('ADDRESS', prod);
