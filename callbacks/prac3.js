const xhr = new XMLHttpRequest();
xhr.open("GET", "https://dog.ceo/api/breeds/list/all");
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const response = JSON.parse(xhr.responseText);
    const breeds = [];
    for (const name in response.message) {
      if (response.message.hasOwnProperty(name)) {
        const content = response.message[name];
        breeds.push({ name, content });
      }
    }

    const firstBreedFromList = breeds[0].name;

    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", `https://dog.ceo/api/breed/${firstBreedFromList}/images/random`);
    xhr2.onreadystatechange = () => {
      if (xhr2.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr2.responseText);
        const randomImage = response.message;

        console.log({ breeds, firstBreedFromList, randomImage });
      }
    };
    xhr2.send(null);
  }
};
xhr.send(null);
