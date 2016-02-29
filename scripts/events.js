"use strict";
SongMaster = (function (oldSongMaster) {

	let homeLink = document.getElementById("link-home");
	let homeView = document.getElementById("home-view");

	let listLink = document.getElementById("link-list");
	let listView = document.getElementById("list-view");

	let addLink = document.getElementById("link-add");
	let addView = document.getElementById("add-view");

	oldSongMaster.activateEvents = function () {

		homeLink.addEventListener("click", function() {
		  homeView.classList.add("hidden");
		  addView.classList.add("hidden");

		  homeView.classList.add("visible");
		  homeView.classList.remove("hidden");
		});

		listLink.addEventListener("click", function(event) {
		  event.preventDefault();
		  homeView.classList.add("hidden");
		  addView.classList.add("hidden");

		  listView.classList.add("visible");
		  listView.classList.remove("hidden");
		});

		addLink.addEventListener("click", function() {
		  homeView.classList.add("hidden");
		  listView.classList.add("hidden");

		  addView.classList.add("visible");
		  addView.classList.remove("hidden");
		});

	}

	return oldSongMaster;

	
})(SongMaster);