angular.module('starter.controllers').controller('HomeCtrl', [
  '$scope', '$timeout', 'TmdbService',
  function ($scope, $timeout, TmdbService){
  	$scope.movies = [
  			{title: 'Usual Suspects', seen: false},
  			{title: 'Prisonners', seen: false},
  			{title: 'La revanche d\'une blonde', seen: false}
  		],

  	$scope.addItems = function (item){
		if(item){
  			var len = item.length;
  				if(len !== 0){
					$scope.movies.push({title: item.trim(), seen: false});
					$scope.item = '';
					$scope.displaySuccessAdd = true;
					$timeout(function(){
						$scope.displaySuccessAdd = false;
					}, 3000);
  				}				
  		}else{
			$scope.displayErrorAdd = true;
			$timeout(function(){
				$scope.displayErrorAdd = false;
			}, 3000);
  		}
 	  },

  	$scope.removeItems = function (index){
  		$scope.movies.splice(index, 1);
  		$scope.displayRemove = true;
  		$timeout(function(){
			 $scope.displayRemove = false;
		  }, 3000);
  	},

  	TmdbService.getPopular().then( function (response){
  	 $scope.popularMovies = response;
  	 $scope.baseImageUrl = 'http://image.tmdb.org/t/p/w500';
  	}),

    $scope.searchMovies = function (searchTerm){
      if(searchTerm){
        TmdbService.research(searchTerm).then( function (response){
          $scope.searchResults = response;
          $scope.baseImageUrl = 'http://image.tmdb.org/t/p/w500';
        });
      }
    }
  }


]);
