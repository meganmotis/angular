'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=36e1a3bde902e9eeb004522ca63c66f9&units=metric', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
