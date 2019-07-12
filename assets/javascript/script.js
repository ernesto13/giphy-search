$(document).ready(() => {
  let searchCard = $('.search-card');
 searchCard.hide();
  function gilphSearch(giph, searchNumber) {
    const API = 'RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8';
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=" + API + "&limit=" + searchNumber);
    xhr.done(function(data) {
      //       Access-Control-Allow-Origin: *;

      let giphySearch = data.data;
      for (let i = 0; i < giphySearch.length; i++) {
        console.log('image is from script is ' + giphySearch[i].images.original.url);
        let image = $("<img class='mb-2'>").attr("src", giphySearch[i].images.original.url);
        let titleDisplay = giphySearch[i].title;
        let title = $("<h5 class='mb-2'>").html(titleDisplay);
        console.log('title: ' + giphySearch[i].title);


        let giphDiv = $("<div class='giphs card'>");
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
    searchCard.show();
    let searchYourGiph = $("#search-giph").val().trim();
    let searchYourNumber =$('#number-giph').val().trim();
    console.log(searchYourGiph, searchYourNumber);

    gilphSearch(searchYourGiph, searchYourNumber);
    $("#search-giph").val("");
    $('#number-giph').val('');
   


  });

});