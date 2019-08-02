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

(async function oneByOne() {
  const num1 = await printNumber1();
  const num2 = await printNumber2();
  console.log({ num1, num2 });
})();
