const convertResponseToJson = response => response.json();

fetch("https://www.omdbapi.com/?s=batman&y=2018&apikey=3734a548")
  .then(convertResponseToJson)
  .then(
    function fetchAsyncData(data) {
      console.log(data);
    }, 
    function catchAsyncError(error) {
      console.error(error);
    },
  );