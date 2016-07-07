juke.config(function($stateProvider){
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
})

