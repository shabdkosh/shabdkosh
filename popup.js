window.onload = function () {

  var checkPageButton = document.getElementById('search');

  checkPageButton.onclick = function(){
    var searchWord = document.getElementById("word").value;
    console.log('btn is clicked');
    var url = encodeURI("http://rajendraarora2009.000webhostapp.com/");    
    var countURL = 0;

    $("#load-meaning").text("");
    $("#notFoundContainer").text("");
    $("#tableSearched").css("display", "none");

    $.ajax({
      dataType: "json",
      url: url,
      data: {
        'meaning': searchWord
      },
      beforeSend: function(){
        $("#search").css({ 'background': '#e8e8e8', 'color': '#000' });
        $("#search").text("Searching ...");
      },
      complete : function() {
        $("#search").css({ 'background': '#449d44', 'color': '#fff' });
        $("#search").text("Search");
      },
      success: function(data) {
        ++countURL;
         if(data["tuc"] != ''){  
            for(i=0; i<data["tuc"].length; i++){
              if(data["tuc"][i]["phrase"]){
                //console.log(data["tuc"][i]["phrase"]["text"])
                $("#tableSearched").css("display", "block");
                $("#load-meaning").append("<tr><th scope='row'>"+(i+1)+"</th><td>"+data["tuc"][i]["phrase"]["text"]+"</td></tr>");
              }
            }
          }else{
            //console.log("not odound");
            $("#notFoundContainer").append("<p class='notFound'>Searched meaning not found! Please check your word again.</p>");
          }
        }
    });
  }
} 
