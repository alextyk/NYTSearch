$(".btn").on("click", function(){

    var query = $("#searchinput").val().trim();
    var records = $("#recordsinput").val().trim();
    var startYear = $("#startyear").val().trim();
    var endYear = $("#endyear").val().trim();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query +"&begin_date=" + startYear + "0101&end_date=" + endYear + "0101&api-key=sd9jn89cPq3H79CNfc9bDOPn4AS5O90h"


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
        // for (var i = 0; i < records; i++) 
            $("#results1").append(response.response.docs[0].snippet);
            $("#results1").append(response.response.docs[0].pub_date);
            $("#results1").append(response.response.docs[0].web_url);
            $("#results2").append(response.response.docs[1].snippet);
            $("#results2").append(response.response.docs[1].pub_date);
            $("#results2").append(response.response.docs[1].web_url);
            $("#results3").append(response.response.docs[2].snippet);
            $("#results3").append(response.response.docs[2].pub_date);
            $("#results3").append(response.response.docs[2].web_url);
            $("#results4").append(response.response.docs[3].snippet);
            $("#results4").append(response.response.docs[3].pub_date);
            $("#results4").append(response.response.docs[3].web_url);
            $("#results5").append(response.response.docs[4].snippet);
            $("#results5").append(response.response.docs[4].pub_date);
            $("#results5").append(response.response.docs[4].web_url);
            

        // }
    
  });


})





