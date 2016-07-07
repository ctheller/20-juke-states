juke.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$urlRouterProvider.when('/', '/albums');
	$urlRouterProvider.when('', '/albums');
	$urlRouterProvider.when('/artist/:id', '/artist/:id/albums');

	$stateProvider
		.state('allAlbums', {
			url: "/albums",
			templateUrl: '/js/album/allAlbums.template.html',
			resolve: {
				albums: function(AlbumFactory){
					return AlbumFactory.fetchAll();
				}
			},
			controller: 'AlbumsCtrl'
		})
		.state('allArtists', {
			url: "/artists",
			templateUrl: '/js/artist/allArtists.template.html',
			resolve: {
				artists: function(ArtistFactory){
					return ArtistFactory.fetchAll();
				}
			},
			controller: "ArtistsCtrl"
		})
		.state('album', {
			url: "/album/:id",
			templateUrl: '/js/album/album.template.html',
			resolve: {
				album: function(AlbumFactory, $stateParams){
					return AlbumFactory.fetchById($stateParams.id);
				}
			},
			controller: "AlbumCtrl"
		})
		.state('artist', {
			url: "/artist/:id",
			templateUrl: '/js/artist/artist.template.html',
			resolve: {
				artist: function(ArtistFactory, $stateParams){
					return ArtistFactory.fetchById($stateParams.id);
				}
			},
			controller: "ArtistCtrl"
		})
		.state('artist.albums', {
			url: "/albums",
			templateUrl: '/js/artist/artist.albums.template.html'
		})
		.state('artist.songs', {
			url: "/songs",
			templateUrl: '/js/artist/artist.songs.template.html'
		})

		//check browser support
    if(window.history && window.history.pushState){
        //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

     // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

     // if you don't wish to set base URL then use this
     $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
      });
   }

})

