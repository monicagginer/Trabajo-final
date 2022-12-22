const URL_API = "http://rickandmortyapi.com/character";

const $container = document.getElementById("container");


const user = fetch(URL_API);

user
  .then((res) => res.json())
  .then((datosRecibidos) => {
    const user = datosRecibidos.results["0"];
    console.log(datosRecibidos);
    $container.innerHTML = `
    <h2>Nombre: ${user.name.first} ${user.name.last}</h2>;
    <img class="profile-picture" src="${user.picture.large}" alt="User profile picture"/> `;
  });
