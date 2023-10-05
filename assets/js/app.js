
//En este script se recupera una API para poder traer información de distintos usuarios del JSON de Github users, dentro de todos los que tiene para recuperar al usuario stolinski. En lo que se recupera, muestra un mensaje de Cargando. En el caso de que no lo recupere, mostrará un mensaje error. 

//Se está trabajando en la ejecución del programa

// Se agregó el fetch para hacer la conexión con la API de Github
const baseEndpoint = fetch("https://api.github.com/users");
//Para refactorizar, se elimina la variable EndUser ya que sería directamente a añadirle ese texto al primer endPoint declarado, y al final mejor que se sume el nombre del usuario

// Se reciben los elementos de nuestro HTML, por lo que hay que referenciarlos correctamente con su respectivo getElement
// Se observa que el blog se recupera a través de un ID, por lo que se elimina del parámetro del getElementById y a su vez se actualiza en HTML.
const $n = document.getElementById("name");
const $b = document.getElementById("blog");
const $l = document.getElementById("location");

// El await se utiliza con funciones async, por lo que se le agregó a la función
async function displayUser(username) {
  $n.textContent = 'cargando...';

  const response = await fetch(`${baseEndpoint}/${username}`);
  console.log(data);

  // Se cambian las comillas simples a backsticks para poder leer las variables
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

// Mensaje para mostrar en consola que no se pudo hacer la conexión con la API
function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  //Se añadió el $ a la variable n, para hacer el match con su declaración
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);