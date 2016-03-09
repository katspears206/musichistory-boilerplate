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

		// $("#addMusicBtn").click(function() {
		// 	let addedMusic = {
		// 		"title" : $("#songInput").val(),
		// 		"artist" : $("#artistInput").val(),
		// 		"album" : $("#albumInput").val(),
		// 		"genre" : $("#genreInput").val()
		// 	};

		$("#addMusicBtn").click(function() {
			let addedMusic = {
				title : $("#songInput").val(),
				artist : $("#artistInput").val(),
				album : $("#albumInput").val(),
				genre : $("#genreInput").val()
			};
			console.log("addedMusic", addedMusic);

			$.ajax({
    		url: "https://musichistory789.firebaseio.com/songs/.json",
    		method: "POST",
    		data: JSON.stringify(addedMusic)
  		}).done(function(addedSong) {
    		console.log("Your new song is", addedSong);
  		});

			$(".display").append(`<h2>${addedMusic.title}</h2><p>${addedMusic.artist} | ${addedMusic.album} | ${addedMusic.genre}</p><button class="deleteBtn" type="submit">Delete</button>`);

			addedMusic = {
				title : $("#songInput").val(""),
				artist : $("#artistInput").val(""),
				album : $("#albumInput").val(""),
				genre : $("#genreInput").val("")
			};
		});

		$(".deleteBtn").click(function (){
			console.log("this", this.id);
			let identifier = this.id;
			console.log("id", identifier);
			$.ajax({
    		url: `https://musichistory789.firebaseio.com/songs/${identifier}.json`,
    		method: "DELETE",
  		}).done(function(deletedSong) {
    		console.log("Your song is now deleted", deletedSong);
  		});

			$(this).closest("div").remove();
		});
	};

	return oldSongMaster;

	
})(SongMaster);