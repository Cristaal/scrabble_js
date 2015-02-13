var points = {1:["A", "N"]};

var scrabbleScore = function(word) {
  var newWord  = word.toUpperCase().split('');
  var score = 0;

for (var i = 0; i < newWord.length; i++) {
  var letter = newWord[i];
  for (var n= 0; n < 2; n++) {
    if(letter === points[1][n]) {
      score += 1;
    }
  }
}
return score;
};
