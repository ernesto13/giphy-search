$(document).ready(() => {
  function randomGiph() {

    var xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&tag=&rating=Y");
    xhr.done(function(data) {


      console.log('randomGiphy: ', data);

      let randomGiphy = data.data;

      let randomGiphyTitle = randomGiphy.title;

      //         let randomTitle = $("#random").html(randomGiphyTitle);
      console.log('random giphy title:' + randomGiphy.title);

      console.log(' source: ' + randomGiphy.source);
      //       console.log('url path: ' + randomGiphy.source);

      //       still images
      let randomImageAnimated = randomGiphy.images.original.url;
      let staticSource = randomGiphy.images.original_still.url;
      let showImageGif = $("<img style= 'height: 350px'>");


      showImageGif.attr('src', staticSource);
      showImageGif.attr('data-state', 'still');
      showImageGif.attr('data-still', staticSource);
      showImageGif.attr('data-animate', randomImageAnimated)
      showImageGif.addClass('stillRandom');

      console.log('static source : ' + staticSource);

      let giphDiv = $("<div class='card giphs'>");

      giphDiv.prepend(randomGiphyTitle);
      giphDiv.append(showImageGif);
      $(".random").prepend(giphDiv);

    });
  }

  randomGiph();


  //   here is the function to pause and plya gifs
  $(document).on('click', '.stillRandom', pausePlayRandomGif)

  function pausePlayRandomGif() {
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

  let getRandomGiph = $('#randomGiphBtn');

  getRandomGiph.on("click", function() {

    randomGiph();

  });

});