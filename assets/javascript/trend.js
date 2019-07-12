$(document).ready( () => {
  let trendingCard = $('.trending-card');
  trendingCard.hide();
  
  function trendingGiph() {
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/trending?api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&limit=25&rating=Y");
    xhr.done(function(data) {
    console.log('trending: ', data);
      let trendGiphy = data.data;
      for(let j = 0; j < trendGiphy.length; j++){
        console.log('trend: ', trendGiphy[j]);
        let trendingImage = $("<img class='mb-2'>").attr("src", trendGiphy[j].images.original.url);
        let trendTitle = $('#trendTitle').html("Trending");
        let giphDiv = $("<div class='giphs card'>");
        giphDiv.prepend(trendTitle);
        giphDiv.append(trendingImage);
        $(".trending").prepend(giphDiv);
      }
      
      });
    }
             
//   trendingGiph();
  
  
  
   let trendGiph = $('#trendingGiphBtn');

  trendGiph.on("click", function() {
    trendingCard.show();
//     e.preventDefault();
    trendingGiph();
    
  });
});