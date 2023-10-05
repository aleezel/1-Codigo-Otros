
//En este script se recupera una API para poder traer información de distintos usuarios del JSON de Github users. En este caso, de stolinski.En lo que se recupera, muestra un mensaje de Cargando. En el caso de que no lo recupere, mostrará un mensaje error. 



//Para refactorizar, se elimina la variable EndUser ya que sería directamente a añadirle ese texto al primer endPoint declarado, y al final mejor que se sume el nombre del usuario
const baseEndpoint = ('https://api.github.com/users');



/*
Se declaran la variables de nombre del usuario, blog para guardarlas y traspasarlas al html mediante el queryselector

Se corrigen las incosistencias de recuperar los elementos class.

Se cambiarán los nombres de las variables para hacerlo más comprensible e intuitivoen dado caso de que las lea otro programador
*/
const $name = document.querySelector('.name');
const $blog = document.querySelector('.blog');
const $location = document.querySelector('.location');


// El await se utiliza con funciones async, por lo que se le agregó al inicio de la función.
//Dentro del parámetro de la función, se recibirá el nombre de usuario del que recuperaremos su información
async function displayUser(username) {
  //En lo que carga la información, mostrará el mensaje de cargando. En este caso, solo se mostrará el estado de validación de name, para no repetir tres veces el mensaje.
  $name.textContent = `cargando...`;
 
  // Usamos el try para hacer las dos llamadas
  try{
    
    //Se usa el await para primero esperar a recibir información de la petición, para después consultarlo en el log. Se guarda en response la concatenación del link de la API con el nombre del usuario que se recibe en el parámetro de la función.
    const response = await fetch(`${baseEndpoint}/${username}`);

    //se convierte el response en objeto JSON
    const data = await response.json();

    //Finalmente semuestra en consola el conjunto de response convertido en JSON
    console.log(data);

    // Se cambian las comillas simples a backsticks para poder leer las variables
    //Se recupera la información del JSON y se traspasa al HTML a través de las variables iniciales
    $name.textContent = `${data.name}`;
    $blog.textContent = `${data.blog}`;
    $location.textContent = `${data.location}`;
  }catch(err){
    //con el catch se lee la función que indica posibles errores.
    handleError();
  }

}

// Mensaje para mostrar en consola que no se pudo hacer la conexión con la API en dado caso
function handleError(err) {
  console.log('OH NO!');
  console.log(err);

  //Se añadió el $ a la variable n, para hacer el match con su declaración al inicio del script, y así traspasar la información al HTML en dado caso. y se agregaron 
  $name.textContent = `Algo salió mal: ${err}`;

}


displayUser('stolinski');