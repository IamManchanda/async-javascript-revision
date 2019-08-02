const printNumber1 = () => new Promise(
  function printNumber1Promise(resolve, reject) {
    setTimeout(function printNumber1Timer() {
      console.log("printNumber1 is done.")
      return resolve(1);
    }, 1000);
  },
);

const printNumber2 = () => new Promise(
  function printNumber2Promise(resolve, reject) {
    setTimeout(function printNumber2Timer() {
      console.log("printNumber2 is done.")
      return resolve(2);
    }, 1000);
  },
);

(async function inParallel() {
  const num1Promise = printNumber1();
  const num2Promise = printNumber2();
  const [num1, num2] = [await num1Promise, await num2Promise];
  console.log({ num1, num2 });
})();
