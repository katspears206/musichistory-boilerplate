"use strict";


function populateSongs (songs){
	console.log("populateSongs is running");
	for ( let prop in songs) {
		let currentSong = songs[prop];

		$(".display").append(`<div><h2>${currentSong.title}</h2><p>${currentSong.artist} | ${currentSong.album} | ${currentSong.genre}</p><button id="${prop}" class="deleteBtn" type="submit">Delete</button></div>`);
	}


	SongMaster.activateEvents();
}

SongMaster.loadSongs(populateSongs);