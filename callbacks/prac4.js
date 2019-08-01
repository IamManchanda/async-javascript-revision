const calculateSquare = (num, done) => {
  setTimeout(function calculateSquareWithTimer() {
    if (typeof num !== "number") {
      done(new Error("Argument of type Number is expected."));
    }
    const result = num ** 2;
    done(null, result);
  }, 1000);
};

/* CALLBACK HELL */
/* THIS below is a bad bad code, don't ever write this in production. */
calculateSquare(1, function callback1(error, result) {
  if (error !== null) {
    console.error(error);
  } else {
    console.log(result);
    calculateSquare(2, function callback2(error, result) {
      if (error !== null) {
        console.error(error);
      } else {
        console.log(result);
        calculateSquare(3, function callback3(error, result) {
          if (error !== null) {
            console.error(error);
          } else {
            console.log(result);
            calculateSquare(4, function callback4(error, result) {
              if (error !== null) {
                console.error(error);
              } else {
                console.log(result);
                calculateSquare("5", function callback5(error, result) {
                  if (error !== null) {
                    console.error(error);
                  } else {
                    console.log(result);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
