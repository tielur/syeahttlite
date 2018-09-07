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
// Make it rain
createRain();

document.getElementById("YEAH-img").addEventListener("click", function() {
  img = document.getElementById("YEAH-img")
  if (img.src.endsWith("images/YEAH.png")) {
    img.src = "images/jeff.png"
  } else {
    img.src = "images/YEAH.png"
  }
});
