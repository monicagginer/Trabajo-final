const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";

console.log(URL_API);

fetch(URL_API)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;

    for (let character of characters) {
      console.log(character.name);
      $container.innerHTML += `

      <div class="card">
<div class="card-title">
  <p>${character.name}</p>
</div>
<div class="img-container">
  <img class="card-img" src="${character.image}
  " alt="Foto de ${character.name}
  ">
</div>
<div class="card-description">
  <p>${character.gender}</p>
  <p>${character.location.name}</p>  
  <p>${character.status}</p>
</div>
</div>
  
`;
    }
  });
