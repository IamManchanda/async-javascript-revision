const calculateSquare = require("../src/calculate-square.js");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const { expect } = chai;

describe("calculateSquare", function describeCalculateSquare() {
  this.timeout(4000);

  it(
    "should resolve 4 when passed 2", 
    function itShouldResolve4WhenPassed2() {
      return calculateSquare(2).then(function handleMultipleAssertions(result) {
        expect(result).to.be.above(3);
        expect(result).to.be.equal(4);
      });
    },
  );

  it(
    "should fulfill when passed 2", 
    function itShouldFulfillWhenPassed2() {
      return expect(calculateSquare(2)).to.be.fulfilled;
    },
  );

  it(
    "should reject with an error when passed string", 
    function itShouldRejectErrorWhenPassedString() {
      return calculateSquare("string")
        .catch(
          function handleRejectionError(error) {
            expect(error).to.not.equal(null);
            expect(error.message).to.equal("Argument of type Number is expected.");
          },
        );
    },
  );
});
