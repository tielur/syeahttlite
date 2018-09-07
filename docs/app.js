// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain(nbDrop) {
  for( i=1;i<nbDrop;i++) {
    var dropLeft = randRange(0,1600);
    var dropTop = randRange(-1000,1400);

    $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
    $('#drop'+i).css('left',dropLeft);
    $('#drop'+i).css('top',dropTop);
  }
}
function getWeather(){
  // Docs
  // https://www.wunderground.com/weather/api/d/docs?d=resources/phrase-glossary#current_condition_phrases
  $.ajax('http://api.wunderground.com/api/c6dc8e785d943109/conditions/q/WA/Seattle.json', {
    dataType: 'jsonp',
    success: function(json) {
      if (json.current_observation.weather.toLowerCase().includes("rain")) {
        createRain(50);
      } else if (json.current_observation.weather.toLowerCase().includes("rain")){
        createRain(20);
      } else {
        createRain(15);
      }
      // $('div#city strong').text(json.current_observation.display_location.full)
      // $('div#icon').html('<img src=' + json.current_observation.icon_url + '>')
      $('div#weather').text(json.current_observation.temperature_string + " " + json.current_observation.weather);
      // $('div#time').text(json.current_observation.observation_time_rfc822);
    }
  });
}

jQuery(function($){
  getWeather();
  $('#result').fadeIn(1000);
})