let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 2;

function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML = texto;
        return;
        }
function verificarIntento() {
        let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
        if (numeroDeUsuario === numeroSecreto) {
                asignarTextoElemento(`p`, `Acertaste el número en tan solo ${intentos} ${(intentos == 1) ? `intento` : `intentos`} !`);
                document.getElementById(`reiniciar`).removeAttribute(`disabled`);
              //  document.getElementsById(`intento`).setAttribute(`disabled`, `true`);
        }
        else {
        //El usuario no acertó
              if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento(`p`, `WRONG! El número es menor!`);
        } else {
                asignarTextoElemento(`p`, `WRONG! El número es mayor!`);
        }
        ++intentos;
        limpiarCajaTexto();
}
return;
}
//dudoso :(
function pressEnter(event) {
        if (event.key === `Enter`) {
                verificarIntento();
}
}

function limpiarCajaTexto () {//Limpiar la caja de texto
        document.querySelector(`#valorUsuario`).value = ``;
}

function reiniciarJuego () {//reiniciar el juego
        limpiarCajaTexto();
        condicionesIniciales();
        document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

function generarNumeroSecreto() {//genera numero aleatorio del juego
        let numeroGenerado = ( Math.floor(Math.random()*numeroMaximo + 1) )

        console.log (numeroGenerado);
        console.log (listaNumerosSorteados); 
// si ya sorteamos todos los numeros dejemos un mensaje en pantalla
 if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`, `Ya no quedan más numeros por sortear!`)
        document.querySelector(`#valorUsuario`).remove();
        //borramos el bloque de ingreso de texto con id #valorUsuario
        }
 else{
// si el numero generado está incluido en la lista, hacemos una operacion
// si no, hacemos otro.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto(); //recursividad !!!
        } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
}
}

//Condiciones iniciales del juego (usable para restart)
function condicionesIniciales () {
asignarTextoElemento(`h1`, `Juego del Numero Secreto V"`);
asignarTextoElemento(`p`, `Indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

condicionesIniciales();