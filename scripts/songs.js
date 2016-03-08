"use strict";

let SongMaster = (function () {
	let songs = [];

	return {

		loadSongs : function (xhrEvent) {
			let songLoader = new XMLHttpRequest();
				
			songLoader.addEventListener("load", function () {
				let songList = JSON.parse(this.responseText);
				console.log("data", songList);

				songs = songList.songs;
				xhrEvent(songs);
			});

			// open tells this what to do with one of teh HTTP verbs ( GET POST PUT DELETE )
			songLoader.open("GET", "songs.json");
			// this actually starts the process
			songLoader.send();
		},
		getSongs: function () {
			return console.log(songs);
		}
	};

})();

