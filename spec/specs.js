describe('scrabbleScore', function() {
  it("outputs a number for a letter", function() {
    expect(scrabbleScore("an")).to.equal(2);
  });
  it("can return a score for a word made of any combination of 1-point letters", function() {
    expect(scrabbleScore("learn")).to.equal(5);
  });
});
