$(document).ready(() => {
  let trendingCard = $('.trending-card');
  trendingCard.hide();

  function trendingGiph() {

    var xhr = $.get("https://api.giphy.com/v1/gifs/trending?api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&limit=25&rating=Y");
    xhr.done(function(data) {
      console.log('trending: ', data);
      let trendGiphy = data.data;
      for (let j = 0; j < trendGiphy.length; j++) {
        console.log('trend: ', trendGiphy[j]);
     
        let titleDisplay = trendGiphy[j].title;
        console.log('title trend :' + titleDisplay);


        //         for still and animated 


        let imageAnimated = trendGiphy[j].images.original.url;
        let staticSource = trendGiphy[j].images.original_still.url;
        let showImageGif = $("<img style= 'height: 350px'>");


        showImageGif.attr('src', staticSource);
        showImageGif.attr('data-state', 'still');
        showImageGif.attr('data-still', staticSource);
        showImageGif.attr('data-animate', imageAnimated)
        showImageGif.addClass('stillTrend');


        //         end of still animated gifs


        let title = $("<h5 class='mb-2'>").html(titleDisplay);
        let trendTitle = $('#trend-title').html(title);
        let giphDiv = $("<div class='giphs card'>");
        giphDiv.prepend(trendTitle);
        giphDiv.append(showImageGif);
        $(".trending").prepend(giphDiv);
      }

    });
  }

  //   here is the function to pause and plya gifs
  $(document).on('click', '.stillTrend', pausePlayTrendGif)

  function pausePlayTrendGif() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  }

  //   end of pause play function

  //   trendingGiph();

  let trendGiph = $('#trendingGiphBtn');

  trendGiph.on("click", function() {
    trendingCard.show();
    //     e.preventDefault();
    trendingGiph();

  });
});