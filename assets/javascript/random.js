

$(document).ready( () => {
  function randomGiph() {
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&tag=&rating=Y");
    xhr.done(function(data) {
    console.log('trending: ', data);
      let trendGiphy = data.data;
      for(let k = 0; k < trendGiphy.length; k++){
        console.log('trend: ', trendGiphy[k]);
        let trendingImage = $("<img class='mb-2'>").attr("src", trendGiphy[j].images.original.url);
        let trendTitle = 'Random';
        let giphDiv = $("<div class='giphs'>");
        giphDiv.prepend(trendTitle);
        giphDiv.append(trendingImage);
        $(".trending").prepend(giphDiv);
      }
      
      });
    }
             
  randomGiph();
});



