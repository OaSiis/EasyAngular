'use strict';
var baseUrl = 'http://api.themoviedb.org/3';
var apiKey = '2ab523578f2edd5c0fb434eabd66830e';
angular.module('starter.services').service('TmdbService', [ '$q', '$http',
  function ($q, $http) {
    var tmdbService = {
      // METHODS
      getPopular: function () {
      var q = $q.defer();
      $http({
        method: 'GET',
        url: baseUrl + '/discover/movie?sort_by=popularity.desc',
        params : {
        api_key : apiKey
        }
      })
      .then(function (response){
        // this callback will be called asynchronously
        // when the response is available
        q.resolve(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        q.reject(response);
      });
        return q.promise;
      },

      research: function (searchTerm){
      var q = $q.defer();
      $http({
        method: 'GET',
        url: baseUrl + '/search/movie',
        params : {
          api_key : apiKey,
          query: searchTerm
        }
      })
      .then(function (response){
        // this callback will be called asynchronously
        // when the response is available
        q.resolve(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        q.reject(response);
      });
        return q.promise;
      },

      getMovie: function (id) {
      var q = $q.defer();
      $http({
        method: 'GET',
        url: baseUrl + '/movie/' + id,
        params: {
          api_key : apiKey
        }
      })
      .then(function (response) {
        // Success
        q.resolve(response);
      }, function (response) {
        // Error
        q.reject;
      });
        return q.promise;
      },
    };
    return tmdbService;
  }
]);