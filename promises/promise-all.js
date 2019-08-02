const askFirstDealer = () => new Promise(
  function handleFirstDealerPromise(resolve, reject) {
    setTimeout(function askFirstDealerTimer() {
      return resolve(8000)
    }, 3000);
  },
);

const askSecondDealer = () => new Promise(
  function handleSecondDealerPromise(resolve, reject) {
    setTimeout(function askSecondDealerTimer() {
      return reject("Not Suitable Car");
    }, 5000);
  },
);

const askThirdDealer = () => new Promise(
  function handleThirdDealerPromise(resolve, reject) {
    setTimeout(function askThirdDealerTimer() {
      return resolve(10000)
    }, 8000);
  },
);

Promise.all([
  askFirstDealer().catch(error => error),
  askSecondDealer().catch(error => error),
  askThirdDealer().catch(error => error),
  8000, // Does Promise.resolve(value)
])
  .then(function handlePrices(prices) {
    console.log(prices);
  });
