var song1 = 0;
var song2 = 0;

function refreshResults () {
  var results = document.getElementById('results');
  results.innerHTML = 'Total: ' + (song1 + song2) + ' ; Song1: ' + song1 + ' ; Song2: ' + song2
}

document.getElementById('button_song1').addEventListener('click', function () {
  song1++;
  refreshResults();
});

document.getElementById('button_song2').addEventListener('click', function () {
  song2++;
  refreshResults();
});
