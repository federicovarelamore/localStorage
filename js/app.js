//VARIABLES
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event listeners
eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}


// FUNCTIONS
function agregarTweet (e){
    e.preventDefault();


    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validacion 
    if(tweet === ''){
        mostrarError('El tweet no puede ir vacio');

        return; // Evita que se ejecuten más lineas de código
    } 
    console.log()
}   

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Inserta el error en el documento
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}