var baby = new Audio("audio/baby.wav");
var bigj = new Audio("audio/bigj.wav");

// function to generate a random number range.
function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain(nbDrop) {
  for(i = 1; i < nbDrop; i++) {
    var dropLeft = randRange(0,1600);
    var dropTop = randRange(-1000,1400);

    $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
    $('#drop'+i).css('left',dropLeft);
    $('#drop'+i).css('top',dropTop);
  }
}

function getWeather($){
  $.ajax('https://api.darksky.net/forecast/a3ed457f962302fa6e93a0831a96d96b/37.8267,-122.4233', {
    dataType: 'jsonp',
    success: function(json) {
      temp = parseInt(json.currently.temperature);
      weather = json.currently.summary
      if (json.currently.precipType === "rain") {
        if (json.currently.precipIntensity) {
          createRain(json.currently.precipIntensity*1666);
        } else {
          createRain(15);
        }
      }
      $('#weather').html(temp + "&deg;F " + weather);
    }
  });
}

function addJeffClickListener($) {
  $("#YEAH-img").on("click", function() {
    img = $("#YEAH-img")
    if (img.attr("src").endsWith("YEAH.png")) {
      img.attr("src", "images/bigj.png");
      bigj.pause();
      bigj.currentTime = 0;
      baby.play();
    } else {
      img.attr("src", "images/YEAH.png")
      baby.pause()
      baby.currentTime = 0;
      bigj.play()
    }
  });
}

jQuery(function($){
  getWeather($);
  $('#result').fadeIn(5000);
  addJeffClickListener($)
})
