const logPromise = (thePromise) => thePromise.then(function logValue(value) {
  console.log(value);
});

const myPromise = new Promise(function handleMyPromise(resolve, reject) {
  return resolve("myPromise");
});

const myString = "myString";

logPromise(Promise.resolve(myPromise));
logPromise(Promise.resolve(myString));
