angular.module('starter.controllers').controller('MovieCtrl', [
  '$scope', 'TmdbService', '$stateParams',
  function ($scope, TmdbService, $stateParams) {
  	 TmdbService.getMovie($stateParams.id).then( function (response){
  	 	console.log($stateParams);
  	 	$scope.movie = response.data;
  	 	$scope.baseImageUrl = 'http://image.tmdb.org/t/p/w500';
  	})
  }
]);