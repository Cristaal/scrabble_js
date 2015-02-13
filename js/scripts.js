var points = {1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]};

var scrabbleScore = function(word) {
  var newWord  = word.toUpperCase().split('');
  var score = 0;

for (var i = 0; i < newWord.length; i++) {
  var letter = newWord[i];
  for (var n= 0; n < 10; n++) {
    if(letter === points[1][n]) {
      score += 1;
    }
  }
}
return score;
};
