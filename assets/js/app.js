
//En este script se recupera una API para poder traer información de distintos usuarios del JSON de Github users. En este caso, de stolinski.En lo que se recupera, muestra un mensaje de Cargando. En el caso de que no lo recupere, mostrará un mensaje error. 

//Para refactorizar, se elimina la variable EndUser ya que sería directamente a añadirle ese texto al primer endPoint declarado, y al final mejor que se sume el nombre del usuario
const baseEndpoint = ('https://api.github.com/users');


// Se corrigen las incosistencias de recuperar los elementos mediante el #
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// El await se utiliza con funciones async, por lo que se le agregó a la función. Para hacer la llamada usaremos el async/await
async function displayUser(username) {
  //En lo que carga la información, mostrará el mensaje de cargando
  $n.textContent = `cargando...`;
  $b.textContent = `cargando...`;
  $l.textContent = `cargando...`;

 
  // Usamos el try para hacer las dos llamadas
  try{
    const response = await fetch(`${baseEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);

    // Se cambian las comillas simples a backsticks para poder leer las variables
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  }catch(err){
    handleError();
  }

}

// Mensaje para mostrar en consola que no se pudo hacer la conexión con la API en dado caso
function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  //Se añadió el $ a la variable n, para hacer el match con su declaración al inicio del script, y así traspasar la información al HTML en dado caso.
  $n.textContent = `Algo salió mal: ${err}`;
  $b.textContent = `Algo salió mal: ${err}`;
  $l.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');