"use strict";
SongMaster = (function (oldSongMaster) {


	oldSongMaster.activateEvents = function () {

		$("#link-home").click(function() {
		  $("#list-view").addClass("hidden");
		  $("#add-view").addClass("hidden");

		  $("#home-view").addClass("visible");
		  $("#home-view").removeClass("hidden");
		});

		$("#link-list").click(function(event) {
		  event.preventDefault();
		  $("#home-view").addClass("hidden");
		  $("#add-view").addClass("hidden");

		  $("#list-view").addClass("visible");
		  $("#list-view").removeClass("hidden");
		});

		$("#link-add").click(function() {
		  $("#home-view").addClass("hidden");
		  $("#list-view").addClass("hidden");

		  $("#add-view").addClass("visible");
		  $("#add-view").removeClass("hidden");
		});

		$("#addMusicBtn").click(function() {
			let addedMusic = {
				"title" : $("#songInput").val(),
				"artist" : $("#artistInput").val(),
				"album" : $("#albumInput").val(),
				"genre" : $("#genreInput").val()
			};
			console.log("addedMusic", addedMusic);

			populateSongs(addedMusic);
		});

	};

	return oldSongMaster;

	
})(SongMaster);