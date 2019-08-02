const askFirstFriend = () => new Promise(
  function handleFirstFriendPromise(resolve, reject) {
    setTimeout(function askFirstFriendTimer() {
      return resolve("Yep I got one extra pen");
    }, 3000);
  },
);

const askSecondFriend = () => new Promise(
  function handleSecondFriendPromise(resolve, reject) {
    setTimeout(function askSecondFriendTimer() {
      return reject("Sorry Brother, got only one");
    }, 1000);
  },
);

const askThirdFriend = () => new Promise(
  function handleThirdFriendPromise(resolve, reject) {
    setTimeout(function askThirdFriendTimer() {
      return resolve("Sure! I have an extra pen for you.");
    }, 2000);
  },
);

Promise.race([
  askFirstFriend(),
  askSecondFriend(),
  askThirdFriend(),
])
  .then(
    function getPenFromWinner(fastestResolvedValue) {
      console.log(fastestResolvedValue);
    },
    function handleErrorFromRejectionist(fastestRejectedValue) {
      console.error(fastestRejectedValue);
    },
  );
