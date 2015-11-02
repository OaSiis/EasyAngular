'use strict';

var routes = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
	  .state('home', {
	    url: '/',
	    controller: 'HomeCtrl', 
	    templateUrl: 'templates/home.html'
	  })
	  .state('movie', {
	    url: '/movie/:id',
	    controller: 'MovieCtrl',   
	    templateUrl: 'templates/movie.html'
	  })
}

angular
	.module('starter')
	.config(routes);

