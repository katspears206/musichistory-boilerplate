"use strict";


function populateSongs (songs){
	console.log("populateSongs is running");
	for ( let prop in songs) {
		let currentSong = songs[prop];

		$(".display").append(`<h2>${currentSong.title}</h2><p>${currentSong.artist} | ${currentSong.album} | ${currentSong.genre}`);
	}


	SongMaster.activateEvents();
}

SongMaster.loadSongs(populateSongs);