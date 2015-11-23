'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;
    console.log($scope.cityID);

    $scope.forecastData = forecast.query({  /*forecast.query*/
      cityID: $routeParams.cityID
    });




  //  if (precipitation > 60)  {
  //     console.log("It's raining");
  //     } else if (temperature > 28) {
  // 	   console.log("It's very hot");
  //     } else if (temperature > 18) {
  //     console.log("It's warm")
  //     } else if (temperature > 13) {
  //     console.log("It's chilly")
  //     } else if (temperature > 9) {
  //     console.log("It's cold")
  //     } else {
  //     console.log("It's very cold")
  //  }


});
