

$(document).ready( () => {
  function randomGiph() {
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/random?api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&tag=&rating=Y");
    xhr.done(function(data) {
    console.log('randomGiphy: ', data);
      let randomGiphy = data.data;
      for(let k = 0; k < randomGiphy.length; k++){
        console.log('random Giphy: ', randomGiphy[k]);
//         let randomImage = $("<img class='mb-2'>").attr("src", randomGiphy.images.original.url);
//         let randomTitle = $("#random").html("Random Giph");
//         let giphDiv = $("<div class='giphs'>");
//         giphDiv.prepend(randomTitle);
//         giphDiv.append(randomImage);
//         $(".random").prepend(giphDiv);
      }
      
       let randomImage = $("<img class='mb-2'>").attr("src", randomGiphy.images.original.url);
      let randomGiphyTitle = randomGiphy.title;
//         let randomTitle = $("#random").html(randomGiphyTitle);
      console.log('random giphy title:' + randomGiphy.title)
      console.log(' source: ' + data.data.source);
      console.log('url path: ' + randomGiphy.source);
      
      let giphDiv = $("<div class='card giphs'>");
        giphDiv.prepend(randomGiphyTitle);
        giphDiv.append(randomImage);
        $(".random").prepend(giphDiv);
       
      
      
      });
    }
             
  randomGiph();
  
   let getRandomGiph = $('#randomGiphBtn');

  getRandomGiph.on("click", function() {
//     e.preventDefault();
    randomGiph();
    
  });
  
  
});



