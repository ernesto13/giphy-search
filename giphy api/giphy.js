$(document).ready(function () {

    //ajax call 

    function myFunction() {
        //can also store the url in a variable
        let URL = "";
        $.ajax({
            url: 'https://    Your URL goes here', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function (data) {
                console.log(data); //will show needed data in console,then can go from here.

                //manipulate the dom if needed
                $("#id").html("<h4>data to show " + data.year + "<h4>");
                $("#id").text(data.text);

            },
            error: function (err) { alert(err); },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "<enter key here>");
                // Enter here your Mashape key
            }
        });
    }
    //call the function
    myFunction();

    //end of function
});
