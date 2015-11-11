'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });

//  $scope.storage = $localStorage;

//  $scope.findCities = function(){
//        $scope.citiesFound = citysearch.get({
//            location: $scope.location
//        });
//        $scope.searchQuery = $scope.location;

//    };
//    $scope.currentWeather = current.get({
//		cityID: 1234567
//  });

///////////////////////////////////////////////////////////
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
