const calculateSquare = (num, done) => {
  setTimeout(function calculateSquareWithTimer() {
    if (typeof num !== "number") {
      throw new Error("Argument of type number is expected");
    }
    const result = num ** 2;
    done(result);
  }, 1000);
};

const callbackOnceDone = (result) => console.log(result);

try {
  calculateSquare("bad arg", callbackOnceDone);
} catch (error) {
  console.error(error);
}

// This won't run in this example as there is error above.
try {
  calculateSquare(2, callbackOnceDone);
} catch (error) {
  console.error(error);
}

