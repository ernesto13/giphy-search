$(document).ready(() => {
  let randomCard = $('.random-card');
  let searchCard = $('.search-card');
  searchCard.hide();
  randomCard.show();

  function gilphSearch(giph, searchNumber) {
    const API = 'RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8';

    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=" + API + "&limit=" + searchNumber);
    xhr.done(function(data) {
      //       Access-Control-Allow-Origin: *;

      let giphySearch = data.data;
      for (let i = 0; i < giphySearch.length; i++) {
        console.log('image is from script is ' + giphySearch[i].images.original.url);
 
        let titleDisplay = giphySearch[i].title;
        let title = $("<h5 class='mb-2'>").html(titleDisplay);
        console.log('title: ' + giphySearch[i].title);

        //         for still and animated 


        let imageAnimated = giphySearch[i].images.original.url;
        let staticSource = giphySearch[i].images.original_still.url;
        let showImageGif = $("<img style= 'height: 350px'>");


        showImageGif.attr('src', staticSource);
        showImageGif.attr('data-state', 'still');
        showImageGif.attr('data-still', staticSource);
        showImageGif.attr('data-animate', imageAnimated)
        showImageGif.addClass('stillSearch');



        //         end of still animated gifs


        let giphDiv = $("<div class='giphs card'>");
        giphDiv.prepend(title);
        giphDiv.append(showImageGif);
        $(".images").append(giphDiv);

        console.log("success got data", data);

      }
    });

  }


  //   here is the function to pause and plya gifs
  $(document).on('click', '.stillSearch', pausePlaySearchGif)

  function pausePlaySearchGif() {
    let state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  }


  //   end of pause play function

  //   scroll button

  let scrollUpBtn = $('#scroll-up-btn');
  scrollUpBtn.hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      scrollUpBtn.show();
    } else {
      scrollUpBtn.hide();
    }
  });

  scrollUpBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '4000');
  });

  function scrollFunction() {
    if (document.body.scrollToTop > 20) {
      document.getElementById(scrollUpBtn).style.display = 'block';
    } else {
      document.getElementById(scrollUpBtn).style.display = 'none';
    }
  }

  let searchGiph = $('#searchGiph');

  searchGiph.on("click", function(e) {
    e.preventDefault();
    searchCard.show();
    randomCard.hide();
    let searchYourGiph = $("#search-giph").val().trim();
    let searchYourNumber = $('#number-giph').val().trim();
    console.log(searchYourGiph, searchYourNumber);

    gilphSearch(searchYourGiph, searchYourNumber);
    $("#search-giph").val("");
    $('#number-giph').val('');

  });

});