'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.forecast
 * @description
 * # forecast
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('forecast', function () {
    // Service logic
    // ...

    // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=metric&APPID=36e1a3bde902e9eeb004522ca63c66f9', {}, {
       query: {
         method:'GET',
         params:{
           cityID: '4717560' // Paris, France ID
         },
         isArray:false
       }
     });
   });
