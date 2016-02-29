"use strict";

function populateSongs (songs) {

	let writeToDom = "";

	for (let i = 0; i < songs.length; i++) {
		let currentSong = songs[i];

		writeToDom += `<h2>${currentSong.title}</h2>` +
		`<p>${currentSong.artist} | ${currentSong.album} | ${currentSong.genre}</p>`;

	}

	document.getElementsByClassName("display")[0].innerHTML = writeToDom

	SongMaster.activateEvents();
}

SongMaster.loadSongs(populateSongs);