"use strict";

let SongMaster = (function () {
	let songs = [];

	return {

		loadSongs : function (callback) {
			$.ajax({
				url:"https://musichistory789.firebaseio.com/songs/.json",
				method : "GET",
			}).done(function(data){
				let songList = data;
				callback(songList);
				console.log("dis data", data);
			})
		},
		getSongs: function () {
			return console.log(songs);
		}
	};

})();

