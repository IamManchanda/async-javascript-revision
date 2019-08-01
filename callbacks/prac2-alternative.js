const calculateSquare = (num, done) => {
  setTimeout(function calculateSquareWithTimer() {
    if (typeof num !== "number") {
      done(new Error("Argument of type number is expected"));
    }
    const result = num ** 2;
    done(null, result);
  }, 1000);
};

const callbackOnceDone = (error, result) => {
  if (error !== null) {
    console.error(error);
  } else {
    console.log(result);
  }
}

calculateSquare("bad arg", callbackOnceDone);
calculateSquare(2, callbackOnceDone);