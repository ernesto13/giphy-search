$(document).ready(() => {

  function gilphSearch(giph, searchNumber) {
    const API = 'RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8';
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=" + API + "&limit=" + searchNumber);
    xhr.done(function(data) {
      //       Access-Control-Allow-Origin: *;

      let giphySearch = data.data;
      for (let i = 0; i < giphySearch.length; i++) {
        console.log('loop is ' + giphySearch[i].images.original.url);
        let image = $("<img class='mb-2'>").attr("src", giphySearch[i].images.original.url);
        let titleDisplay = giphySearch[i].title;
        let title = $("<h3 class='mb-2'>").html(titleDisplay);
        console.log('title: ' + giphySearch[i].title);


        let giphDiv = $("<div class='giphs'>");
        giphDiv.prepend(title);
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
    let searchYourNumber =$('#number-giph').val().trim();
    console.log(searchYourGiph, searchYourNumber);

    gilphSearch(searchYourGiph, searchYourNumber);
    $("#search-giph").val("");
    $('#number-giph').val('');
   


  });

});