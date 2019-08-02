const specificNumberFn = () => new Promise(
  function specificNumberFnPromise(resolve, reject) {
    setTimeout(function specificNumberFnTimer() {
      return resolve(42);
    }, 2000);
  }
);

(async function getSpecificNumber() {
  const specificNumber = await specificNumberFn();
  console.log(specificNumber);
})();
