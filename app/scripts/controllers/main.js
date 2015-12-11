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
    $scope.displayText = "Hello there, little Ninja!";
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
      if (humidity >= 94) {
        console.log("It's raining, wear a raincoat.");
        $scope.myPicture="images/rainy.jpg";
        $scope.displayText = "Um...your legs might get wet!";
        // show picture of rain coat
      }
      else {
        if (temperature > 28) {
          // console.log("YES! It's very hot, wear shorts.");
          // very hot summer picture
          $scope.myPicture = "images/veryhot.jpg";
          $scope.displayText = "Yes, that or a bathing suit!";
        }
        if (temperature >24 && temperature <=28) {
          // warm weather
          $scope.myPicture="images/sunny.jpg";
          $scope.displayText="Yes, wear shorts!";

        }
        if (temperature >20 && temperature <=24) {
          // warm weather
          $scope.myPicture="images/Eli.jpg";
        $scope.displayText="Yes! That's a great idea!";
        }
        if (temperature >16 && temperature <=20) {
          // warm weather
          $scope.myPicture="images/eli_and_ruth.jpg";
        $scope.displayText="If you want to you can!";

        }
        if (temperature >13 && temperature <=16) {
          // chilly
          $scope.myPicture="images/chilly.jpg";
          $scope.displayText="It's a bit chilly, but it's up to you!"
        }
        if (temperature >10 && temperature <=13) {
          // chilly
          $scope.myPicture="images/cool.jpg";
          $scope.displayText="Sorry, little ninja, no shorts today!"
        }
        if (temperature >4 && temperature <=10) {
          // fall leaves -- jackets
          $scope.myPicture="images/fall_leaves.jpg";
          $scope.displayText="Nope, not today!"
        }
        if (temperature >0 && temperature <=4) {
          // chilly
          $scope.myPicture="images/cold.jpg";
          $scope.displayText="It's winter. Ask me in 3 months!"
        }
        if (temperature <=0) {
          // very cold
          $scope.myPicture="images/verycold.jpg";
          $scope.displayText="No way! It's freezing!"
        }
      };

    };
  });
