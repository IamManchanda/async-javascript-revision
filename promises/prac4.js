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

/* Say No to callback hell */
calculateSquare(1)
  .then(
    function callback1(result) {
      console.log(result);
      return calculateSquare(2);
    }, 
    function rejection1(error) {
      console.error(error);
    },
  )
  .then(
    function callback2(result) {
      console.log(result);
      return calculateSquare(3);
    }, 
    function rejection2(error) {
      console.error(error);
    },
  )
  .then(
    function callback3(result) {
      console.log(result);
      return calculateSquare(4);
    }, 
    function rejection3(error) {
      console.error(error);
    },
  )
  .then(
    function callback4(result) {
      console.log(result);
      return calculateSquare(5);
    }, 
    function rejection4(error) {
      console.error(error);
    },
  )
  .then(
    function callback5(result) {
      console.log(result);
      return undefined;
    }, 
    function rejection5(error) {
      console.error(error);
    },
  );