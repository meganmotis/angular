'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, citysearch, $localStorage) {
 //  	$scope.location = 'Seattle';
 //  	$scope.current = current.get({location: $scope.location});

 //  	$scope.refreshCurrent = function() {
 //  		$scope.current = current.get({
	// 		location: $scope.location
	// 	});
	// };

	$scope.citiesFound = citysearch.get();
  $scope.storage = $localStorage;

  $scope.findCities = function(){
        $scope.citiesFound = citysearch.get({
            location: $scope.location
        });
        $scope.searchQuery = $scope.location;

    };

    $scope.currentWeather = current.get({
		cityID: 1234567
  });
  });

/**
angular.module('angularAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
*/
