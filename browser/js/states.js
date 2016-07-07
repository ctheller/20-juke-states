juke.config(function($stateProvider){
	$stateProvider
		.state('allAlbums', {
			url: "/albums",
			templateUrl: '/js/album/allAlbums.template.html',
			controller: 'AlbumsCtrl'
		})
		.state('allArtists', {
			url: "/artists",
			templateUrl: '/js/artist/allArtists.template.html',
			controller: "ArtistsCtrl"
		})
		.state('album', {
			url: "/album/:id",
			templateUrl: '/js/album/album.template.html',
			controller: "AlbumCtrl"
		})
})

