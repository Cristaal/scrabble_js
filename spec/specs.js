describe('scrabbleScore', function() {
  it("outputs a number for a letter", function() {
    expect(scrabbleScore("an")).to.equal(2);
  });
  it("can return a score for a word made of any combination of 1-point letters", function() {
    expect(scrabbleScore("learn")).to.equal(5);
  });
  it("can return a score for words with two-point letter values", function() {
    expect(scrabbleScore("dog")).to.equal(5);
  });
  it("can return a score for words with three-point letter values", function() {
    expect(scrabbleScore("bump")).to.equal(10);
  });

  it("can return a score for words with four-point letter values", function() {
    expect(scrabbleScore("why")).to.equal(12);
  });

  it("can ignore apostrophes", function() {
    expect(scrabbleScore("bill's")).to.equal(7);
  });
  it("will give me the score for a series of words", function() {
    expect(scrabbleScore("Dupree's Diamond Blues")).to.equal(28);
  });
});
