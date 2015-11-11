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
});
