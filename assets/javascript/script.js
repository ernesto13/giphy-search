$(document).ready( () => {
  

  
//   change r to y 
//javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { 
//     console.log("success got data", data); 
// });
  
  
//   $(document).ready(function () {

//     //ajax call 

//     function myFunction() {
//         //can also store the url in a variable
//         let URL = "https://api.giphy.com/v1/gifs/search?  api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&q=mustang&limit=25&offset=0&rating=R&lang=en";
//         $.ajax({
//             url: URL, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
//             type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
//             data: {}, // Additional parameters here
//             dataType: 'json',
//             success: function (data) {
//                 console.log(data); //will show needed data in console,then can go from here.

//                 //manipulate the dom if needed
// //                 $("#id").html("<h4>data to show " + data.year + "<h4>");
// //                 $("#id").text(data.text);

//             },
//             error: function (err) { alert(err); },
// //             beforeSend: function (xhr) {
// //                 xhr.setRequestHeader("X-Mashape-Authorization", "<enter key here>");
// //                 // Enter here your Mashape key
// //             }
//         });
//     }
//     //call the function
//     myFunction();

//     //end of function
// });

  
  
   function giphSearch() {
        // Here we run our AJAX call to the OpenWeatherMap API

//         const API = "51d7968cfee71b16dc19326d1a6ed198";
        const URL = 'https://api.giphy.com/v1/gifs/search?  api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&q=mustang&limit=25&offset=0&rating=R&lang=en';

//         var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=" + API;

        $.ajax({
            url: URL,
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data.data);
            }
        })
            // We store all of the retrieved data inside of an object called "data"
            .done(function (data) {


                // Log the queryURL
                console.log(data);

                // Log the resulting object
                
            });

    }
    //end of function
  
//   giphSearch();
  
  
  
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=mustang&api_key=RlvbFBFttCunUi82u3dfGWd6AKeGCWZ8&limit=5");
    xhr.done(function(data) { 
//       var image = $("<img>").attr("src", data);
//       console.log(image);
//        let giphDiv = $("<div class='giphs'>");
//        giphDiv.append(image)
//        $(".images").prepend(giphDiv);
      
    
      console.log("success got data", data); 
//       document.getElementsByClassName('images').src= data.data.images.original.url;
      
      console.log('my data for gilphs', data[0].data.images.original.url);
    });
  
  
  
});