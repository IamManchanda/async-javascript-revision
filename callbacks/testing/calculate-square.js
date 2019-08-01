const calculateSquare = (num, done) => {
  setTimeout(function calculateSquareWithTimer() {
    if (typeof num !== "number") {
      done(new Error("Argument of type number is expected."));
      return undefined;
    }
    const result = num ** 2;
    done(null, result);
  }, 1000);
};

module.exports = calculateSquare;
