
'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */

 angular.module('angularAppApp')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=metric&APPID=36e1a3bde902e9eeb004522ca63c66f9', {
       query: {
         method:'GET',
         params:{
           cityID: '4717560' // Paris, FR
        },
       isArray:false
      }
    });
  });
//     return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=metric&APPID=36e1a3bde902e9eeb004522ca63c66f9', {
//       get: {
//        method:'GET',
//        params: {
//          id: '4717560'
//        }
//      }
//    });
