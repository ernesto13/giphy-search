$(document).ready(() => {

  function gilphSearch(giph) {
    const API = 'RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8';
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=" + API + "&limit=5");
    xhr.done(function(data) {
      //       Access-Control-Allow-Origin: *;

      let giphySearch = data.data;
      for (let i = 0; i < giphySearch.length; i++) {
        console.log('loop is ' + giphySearch[i].images.original.url);
        let image = $("<img class='mb-2'>").attr("src", giphySearch[i].images.original.url);


        let giphDiv = $("<div class='giphs'>");
        giphDiv.append(image);
        $(".images").prepend(giphDiv);

        console.log("success got data", data);



      }

    });

  }

  let searchGiph = $('#searchGiph');

  searchGiph.on("click", function(e) {
    e.preventDefault();
    let searchYourGiph = $("#search-giph").val().trim();
    console.log(searchYourGiph);

    gilphSearch(searchYourGiph);
    $("#search-giph").val("");


  });

});