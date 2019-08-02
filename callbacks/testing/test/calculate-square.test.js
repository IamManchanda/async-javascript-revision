const calculateSquare = require("../src/calculate-square.js");
const expect = require("chai").expect;

describe("calculateSquare", function describeCalculateSquare() {
  it(
    "should return 4 when passed 2", 
    function itShouldReturn4WhenPassed2(done) {
      calculateSquare(2, function callbackShouldReturn4WhenPassed2(error, result) {
        expect(result).to.equal(4);
        done();
      });
    },
  );

  it(
    "should return an error when passed string", 
    function itShouldReturnErrorWhenPassedString(done) {
      calculateSquare("string", function callbackShouldReturnErrorWhenPassedString(error, result) {
        expect(error).to.not.equal(null);
        expect(error.message).to.equal("Argument of type Number is expected.");
        done();
      });
    },
  );
});
