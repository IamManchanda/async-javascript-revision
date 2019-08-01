const calculateSquare = (num) => {
  return new Promise(function calculateSquarePromised(resolve, reject) {
    setTimeout(function calculateSquareWithTimer() {
      if (typeof num !== "number") {
        return reject(new Error("Argument of type Number is expected."));
      }
      const result = num ** 2;
      resolve(result);
    }, 1000);
  });
};

const callbackResponse = (response) => console.log(response);
const callbackError = (error) => console.error(error);

calculateSquare(2).then(callbackResponse, callbackError);
calculateSquare("2").then(callbackResponse, callbackError);
