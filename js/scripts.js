var points1 = {1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]};
var points2 = {2:["D", "G"]};
var points3 = {3:["B", "C", "M", "P"]};
var points4 = {4:["F", "H", "V", "W", "Y"]};
var points5 = {5:["K"]};
var points8 = {8:["J", "X"]};
var points10 = {10:["Q", "Z"]};

var scrabbleScore = function(word) {
  var newWord  = word.replace(/\'\b/g, " ").toUpperCase().split("");
  var score = 0;

for (var i = 0; i < newWord.length; i++) {
  var letter = newWord[i];
  for (var n = 0; n < 10; n++) {
    if(letter === points1[1][n]) {
      score += 1;
    } else if (letter === points2[2][n]) {
      score += 2;
    } else if (letter === points3[3][n]) {
      score += 3;
    }
  }
}
return score;
};
