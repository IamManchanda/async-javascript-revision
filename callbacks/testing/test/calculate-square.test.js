const calculateSquare = require("../calculate-square.js");
const expect = require("chai").expect;

describe("calculateSquare", function describeCalculateSquare() {
  it("should return 4 if passed 2", function itShouldReturn4IfPassed2(done) {
    calculateSquare(2, function callbackShouldReturn4IfPassed2(error, result) {
      expect(result).to.equal(4);
      done();
    });
  });

  it("should return an error if passed string", function itShouldReturnErrorIfPassedString(done) {
    calculateSquare("string", function callbackShouldReturnErrorIfPassedString(error, result) {
      expect(error).to.not.equal(null);
      expect(error.message).to.equal("Argument of type Number is expected.");
      done();
    });
  });
});
