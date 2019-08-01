const myPromise = new Promise(function myPromiseHandler(resolve, reject) {
  // reject("reason");
  resolve("value");
});

console.log(myPromise);
