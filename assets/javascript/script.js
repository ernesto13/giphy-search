$(document).ready(() => {

  function gilphSearch(giph) {
    const API = 'RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8';
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=" + API + "&limit=5");
    xhr.done(function(data) {
      //       Access-Control-Allow-Origin: *;
      let image = $("<img>").attr("src", data.data[1].images.original.url);


      let giphDiv = $("<div class='giphs mx-auto'>");
      giphDiv.append(image);
      $(".images").prepend(giphDiv);

      console.log("success got data", data);

      console.log('my data for gilphs', data.data[1].images.original.url);
    });

  }
  gilphSearch();

  let searchGiph = $('#searchGiph');

  searchGiph.on("click", function(e) {
    e.preventDefault();
    let searchYourGiph = $("#search-giph").val().trim();
    console.log(searchYourGiph);

    gilphSearch(searchYourGiph);
    $("#search-giph").val("");


  });

});