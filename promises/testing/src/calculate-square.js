const calculateSquare = (num) => {
  return new Promise(function calculateSquarePromised(resolve, reject) {
    setTimeout(function calculateSquareWithTimer() {
      if (typeof num !== "number") {
        return reject(new Error("Argument of type Number is expected."));
      }
      const result = num ** 2;
      resolve(result);
    }, 3000);
  });
};

module.exports = calculateSquare;
