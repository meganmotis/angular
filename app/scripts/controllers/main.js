'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, citysearch, $localStorage, $sce) {

    $scope.location = "";
    $scope.myPicture = "images/ninja.jpg";
    $scope.storage = $localStorage;
    $localStorage.recentSearches = [];

    $scope.searchQuery = function(){
      $scope.citiesFound = citysearch.find({
    // $scope.storage = $localStorage;
    //
    // $scope.findCities = function(){
    //     $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $localStorage.recentSearches.push($scope.location);
        // $scope.searchQuery = $scope.location;
        // console.log($scope.citiesFound);
    };
    $scope.showOutfit = function(temperature, humidity){
      if (humidity >= 73) {
        $scope.myPicture="images/rainy.jpg";
        // show picture of rain contact
      }
      else {
        if (temperature > 25) {
          // console.log("veryhot");
          // very hot summer picture
          $scope.myPicture = "images/veryhot.jpg";
        }
        if (temperature >20 && temperature <=25) {
          // warm weather
          $scope.myPicture="images/Eli.jpg";
        }
        if (temperature >15 && temperature <=20) {
          // chilly
          $scope.myPicture="images/chilly.jpg";
        }
        if (temperature >10 && temperature <=15) {
          // chilly
          $scope.myPicture="images/cool.jpg";
        }
        if (temperature >5 && temperature <=10) {
          // chilly
          $scope.myPicture="images/fall_leaves.jpg";
        }
        if (temperature >0 && temperature <=5) {
          // chilly
          $scope.myPicture="images/cold.jpg";
        }
        if (temperature <=0) {
          // very cold
          $scope.myPicture="images/verycold.jpg";
        }
      };


    };
  });




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
