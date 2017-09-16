var topics = ["dragons", "technology", "iPhone", "android"];
var serachWord = "iphone";

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + serachWord + "&api_key=ea862e8d744b464f8af525f59c07c55e";

$.ajax({
  url: queryURL,
  method: 'GET'
}).done( function(response) {
    console.log(response);  

    $(".topic-button").on("click", function() {
		serachWord = $(this).attr("topic");
		queryURL = "https://api.giphy.com/v1/gifs/search?q=" + serachWord + "&api_key=ea862e8d744b464f8af525f59c07c55e";
	});

    $(".gif").removeAttr("style").hide();

    for(var i=0; i<10; i++) {

      var img = $("<img>");

      img.addClass("gif");
      img.attr("src", response.data[i].images.fixed_width.url)

      $("#gif-box").append(img);
    }
    
});

function addTopic() {

	for(var i=topics.length-1; i<topics.length; i++) {
		var topicBtn = $("<button>");
		topicBtn.addClass("topic-button btn btn-default");

		topicBtn.attr("topic", topics[i]);
		topicBtn.html( topicBtn.attr("topic") );
		$("#button-box").append(topicBtn);
	}

	$(".topic-button").on("click", function() {
		serachWord = $(this).attr("topic");
		queryURL = "https://api.giphy.com/v1/gifs/search?q=" + serachWord + "&api_key=ea862e8d744b464f8af525f59c07c55e";
		console.log(serachWord);
		console.log(queryURL);

	$.ajax({
  		url: queryURL,
  		method: 'GET'
	}).done( function(response) {
    	console.log(response);  

    	$(".gif").removeAttr("style").hide();

    	for(var i=0; i<10; i++) {

      		var img = $("<img>");

      		img.addClass("gif");
      		img.attr("src", response.data[i].images.fixed_width.url)

  	   		 $("#gif-box").append(img);
    	}
    
	});
	});

}


for(var i=0; i<topics.length; i++) {

	var topicBtn = $("<button>");
	topicBtn.addClass("topic-button btn btn-default");

	topicBtn.attr("topic", topics[i]);
	topicBtn.html( topicBtn.attr("topic") );
	$("#button-box").append(topicBtn);
}


$(".topic-button").on("click", function() {

	serachWord = $(this).attr("topic");
	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + serachWord + "&api_key=ea862e8d744b464f8af525f59c07c55e";
	console.log(serachWord);
	console.log(queryURL);

	$.ajax({
  		url: queryURL,
  		method: 'GET'
	}).done( function(response) {
    	console.log(response);  

    	$(".gif").removeAttr("style").hide();

    	for(var i=0; i<10; i++) {

      		var img = $("<img>");

      		img.addClass("gif");
      		img.attr("src", response.data[i].images.fixed_width.url)

  	   		 $("#gif-box").append(img);
    	}
    
	});

});


$("#add-topic").on("click", function() {
	event.preventDefault();

	var topicName = $("#topic-input").val().trim();
	$("#topic-input").val(" ");
	topics.push(topicName);
	addTopic();
});

