/**
 * @ngdoc overview
 * @name robottiFrontApp
 * @description
 * # robottiFrontApp, bootstraps the application
 *
 * Main module of the application.
 */
angular
	.module('robottiFrontApp', [
		'ngDialog' //external dependencies here

	]).constant('ADDRESS', 'http://proto294.haaga-helia.fi:8081/');
