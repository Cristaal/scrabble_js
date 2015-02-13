var points = {1:["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]};
points[2] = ["D", "G"];
points[3] = ["B", "C", "M", "P"];
points[4] = ["F", "H", "V", "W", "Y"];
points[5] = ["K"];
points[8] = ["J", "X"];
points[10] = ["Q", "Z"];

var scrabbleScore = function(word) {
  var newWord  = word.replace(/\'\b/g, " ").toUpperCase().split("");
  var score = 0;

for (var i = 0; i < newWord.length; i++) {
  var letter = newWord[i];
  for (var n = 0; n < 10; n++) {
    if(letter === points[1][n]) {
      score += 1;
    } else if (letter === points[2][n]) {
      score += 2;
    } else if (letter === points[3][n]) {
      score += 3;
    } else if (letter === points[4][n]) {
      score += 4;
    }
  }
}
return score;
};
