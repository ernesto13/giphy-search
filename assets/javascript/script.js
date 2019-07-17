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
        let image = $("<img class='mb-3' style= 'height: 350px'>").attr("src", giphySearch[i].images.original.url);

        let titleDisplay = giphySearch[i].title;
        let title = $("<h5 class='mb-2'>").html(titleDisplay);
        console.log('title: ' + giphySearch[i].title);
        //  style= 'width: 300px; height: 250px'

        let giphDiv = $("<div class='giphs card'>");
        giphDiv.prepend(title);
        giphDiv.append(image);
        $(".images").append(giphDiv);

        console.log("success got data", data);

      }
    });

  }

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