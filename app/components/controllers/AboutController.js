// AboutController.js
// For distribution, all controllers
// are concatanated into single app.js file
// by using Gulp

'use strict';

angular.module('mostPopularListingsApp.about', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/about', {
		controller: 'AboutController',
		templateUrl: 'components/views/aboutView.html'
	});
}])

// Controller definition for this module
.controller('AboutController', ['$scope', function($scope) {

	// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){

	};

    /**
	 * Loguje i wyswietla komunikaty
     */
	function logAndAlertMessages()
	{
        console.log('About message 1');
        alert('message 1');

        console.log('About message 2');
        alert('message 2')
	}


	this.message = "Hello About!";

}]);