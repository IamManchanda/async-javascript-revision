const myPromise = new Promise(function myPromiseHandler(resolve, reject) {
  resolve("Hello World");
});

myPromise.then(function afterMyPromiseExecution(value) {
  console.log(value);
});

console.log("I never promised");
