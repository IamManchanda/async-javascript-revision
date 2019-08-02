const calculateSquare = require("../src/calculate-square.js");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const { expect } = chai;

describe("calculateSquare", function describeCalculateSquare() {
  this.timeout(4000);

  it(
    "should resolve 4 when passed 2", 
    function itShouldResolve4WhenPassed2(done) {
      expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    },
  );

  it(
    "should fulfill when passed 2", 
    function itShouldFulfillWhenPassed2(done) {
      expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    },
  );

  it(
    "should reject with an error when passed string", 
    function itShouldRejectErrorWhenPassedString(done) {
      expect(calculateSquare("string")).to.be.rejected.notify(done);
    },
  );
});
