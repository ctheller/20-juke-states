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
		.state('artist', {
			url: "/artist/:id",
			templateUrl: '/js/artist/artist.template.html',
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
})

