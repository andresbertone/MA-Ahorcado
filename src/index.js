import Game from "./Game";

// Inicializamos un juego nuevo
let game = new Game();

game.setAvailableWords(['Agilidad', 'Fabricante', 'Elefante', 'Jirafa', 'Cabra', 'Periferico', 'Teclado']);
game.setMaximumNumberOfErrorsInLetters(6);
game.chooseRandomWord();
console.log(game.word);

let puntuacion = 0; // 25 puntos si aciertas; -15 puntos si fallas
let numIntentos = game.maximumNumberOfErrorsInLetters;
let numIntentosOriginales = numIntentos;
let palabraAdivinar = [];
let palabraMostrar = [];
let teclasBloqueadas = [];

let nodoResultado = document.querySelector('#resultado').firstChild;
let nodoIntentos = document.querySelector('#intentos');
let nodoIntentosOriginales = document.querySelector('#intentosOriginales');
let nodoPuntuacion = document.querySelector('#puntuacionH2');
let nodoBotonReiniciar = document.querySelector('#BotonReiniciar');



function iniciarPartida() {

  // Almacenamos la palabra aleatoria en palabraAleatoria seleccionando la palabra
  // de la lista de palabras con la posicion aleatoria
  var palabraAleatoria = game.word;

  // Guardamos en tamanioPalabraAleatoria el tamaño de la palabra seleccionada aleatoriamente
  var tamanioPalabraAleatoria = game.word.length;

  // Guardamos en palabraAdivinar (array) cada uno de los caracteres de la palabra aleatoria
  // En palabraMostrar guardaremos tantos guiones como caracteres tiene la palabra aleatoria
  for (var i = 0; i < tamanioPalabraAleatoria; i++) {
    // Si el caracter elegido no es una letra...
    if (!palabraAleatoria.charAt(i).match(/[a-zñA-ZÑ]/)) {
      // Introducimos en la lista de la palabraAdivinar y palabraMostrar el caracter
      palabraAdivinar.push(palabraAleatoria.charAt(i));
      palabraMostrar.push(palabraAleatoria.charAt(i));
      // Si lo es...
    } else {
      // Introducimos el caracter en palabraAdivinar y un guión en palabraMostrar
      palabraAdivinar.push(palabraAleatoria.charAt(i).toLowerCase());
      palabraMostrar.push("_");
    }
  }

  // Mostramos el máximo de números errores con nodoIntentosOriginales.textContent
  nodoIntentosOriginales.textContent = numIntentosOriginales;

  // Llamamos a actualizarDatosPantalla() para refrescar los datos en la pantalla
  actualizarDatosPantalla();
}

/**
 * Función para dibujar los cambios en pantalla
 */
function actualizarDatosPantalla() {
  // Pasamos palabraMostrar a un String y separamos cada posición con un espacio con el método join()
  // Luego lo mostramos en el div resultado con nodoResultado.textContent y en mayúsculas
  nodoResultado.textContent = palabraMostrar.join(' ').toUpperCase();

  // Mostramos el números de intentos actuales con nodoIntentos.textContent
  nodoIntentos.textContent = numIntentos;

  // Mostramos la puntuación del usuario
  nodoPuntuacion.textContent = puntuacion + " PUNTOS";
}

/**
 * Función que captura la tecla pulsada mediante el teclado físico,
 * comprueba que no se haya pulsado todavía y se la pasa a la función
 * comprobarTecla
 */
function cogerTecladoFisico(evObject) {
  var capturado = String.fromCharCode(evObject.which);
  if (!teclasBloqueadas.includes("tecla" + capturado)) {
    comprobarTecla(capturado);
  }
}

/**
 * Función para comprobar si la tecla pulsada es correcta
 */
window.comprobarTecla = function(letraUsuario) {
  // Recorremos todo el array de la palabra a adivinar comparando cada posición con la letra que ingresó el usuario

   //for (var i = 0; i < palabraAdivinar.length; i++) {
    // Si la letra del usuario es igual a la letra en i posición, la guardamos en i posición de palabraMostrar
        const correctLetters = game.letterPosition(letraUsuario);
        if (correctLetters) {
            correctLetters.forEach((position) => {
                palabraMostrar[position] = letraUsuario;
                document.getElementById("tecla" + letraUsuario).disabled = true;
                document.getElementById("tecla" + letraUsuario).className = "teclaDeshabilitada";
                teclasBloqueadas.push("tecla" + letraUsuario);
                puntuacion += 25;
    
            });
        }
        /* if (letraUsuario == palabraAdivinar[i]) {
            palabraMostrar[i] = letraUsuario;
            // Bloqueamos la tecla deshabilitando el botón y cambiando su clase
            document.getElementById("tecla" + letraUsuario).disabled = true;
            document.getElementById("tecla" + letraUsuario).className = "teclaDeshabilitada";
        
            // Añadimos la tecla a un array para posteriormente trabajar con ellas
            teclasBloqueadas.push("tecla" + letraUsuario);
            puntuacion += 25;
        }  */
     //}

  // Si no está la letra....
        const correctLetter = game.chooseLetter(letraUsuario) === 'Letra Correcta';
        
        if (!correctLetter) {
            if (numIntentos > 0) {
                numIntentos -= 1;
                puntuacion -= 15;
              }

              if (numIntentos == 5) {
                document.getElementById('imagen').src = 'img/svg/cabeza.svg';
              } else if (numIntentos == 4) {
                document.getElementById('imagen').src = 'img/svg/cuerpo.svg';
              } else if (numIntentos == 3) {
                document.getElementById('imagen').src = 'img/svg/brazoIzq.svg';
              } else if (numIntentos == 2) {
                document.getElementById('imagen').src = 'img/svg/brazoDer.svg';
              } else if (numIntentos == 1) {
                document.getElementById('imagen').src = 'img/svg/piernaIzq.svg';
              } else if (numIntentos == 0) {
                document.getElementById('imagen').src = 'img/svg/piernaDer.svg';
              }
          
              // Bloqueamos la tecla deshabilitando el botón y cambiando su clase
              document.getElementById("tecla" + letraUsuario).disabled = true;
              document.getElementById("tecla" + letraUsuario).className = "teclaDeshabilitada";
          
              // Añadimos la tecla a un array para posteriormente trabajar con ellas
              teclasBloqueadas.push("tecla" + letraUsuario);
        }
  //if (!palabraAdivinar.includes(letraUsuario)) {
    // Restamos un intento
    /* if (numIntentos > 0) {
      numIntentos -= 1;
      puntuacion -= 15;
    } */

    // Dependiendo del fallo, mostramos una imagen u otra
    /* if (numIntentos == 5) {
      document.getElementById('imagen').src = 'img/svg/cabeza.svg';
    } else if (numIntentos == 4) {
      document.getElementById('imagen').src = 'img/svg/cuerpo.svg';
    } else if (numIntentos == 3) {
      document.getElementById('imagen').src = 'img/svg/brazoIzq.svg';
    } else if (numIntentos == 2) {
      document.getElementById('imagen').src = 'img/svg/brazoDer.svg';
    } else if (numIntentos == 1) {
      document.getElementById('imagen').src = 'img/svg/piernaIzq.svg';
    } else if (numIntentos == 0) {
      document.getElementById('imagen').src = 'img/svg/piernaDer.svg';
    }

    // Bloqueamos la tecla deshabilitando el botón y cambiando su clase
    document.getElementById("tecla" + letraUsuario).disabled = true;
    document.getElementById("tecla" + letraUsuario).className = "teclaDeshabilitada";

    // Añadimos la tecla a un array para posteriormente trabajar con ellas
    teclasBloqueadas.push("tecla" + letraUsuario); */
  //}

  estadoPartida();
  actualizarDatosPantalla();
}

/**
 * Función para comprobar si ya ha acabado el juego
 */
function estadoPartida() {
  // Si no quedan guiones...
  if (!palabraMostrar.includes('_')) {
    // Bloqueamos todas las teclas para que el usuario no pueda clickar las restantes
    bloquearTodasTeclas()

    // Cambiamos el texto del botón de reiniciar a "Siguiente" y mostramos una nueva imagen
    document.getElementById('imagen').src = 'img/svg/victoria.svg';
    nodoBotonReiniciar.textContent = "Siguiente";
  }

  // Si no quedan intentos lanzamos una alerta
  if (numIntentos == 0) {
    // Bloqueamos todas las teclas para que el usuario no pueda clickar las restantes
    bloquearTodasTeclas()

    // Igualamos palabraMostrar a palabraAdivinar para mostrar la palabra
    // a encontrar cuando hayamos perdido
    palabraMostrar = palabraAdivinar;
    // Cambiamos el texto del botón de reiniciar a "Reintentar"
    nodoBotonReiniciar.textContent = "Siguiente";
  }
}

/**
 * Función para bloquear todas las teclas del teclado, la usaremos cuando finalice la partida
 */
function bloquearTodasTeclas() {
  // Guardamos en un array todos los botones con la clase tecla
  var teclas = document.querySelectorAll('button.tecla');

  // Recorremos la lista y vamos deshabilitando las teclas, cambiando su estilo
  // y las añadimos a la lista de teclas bloqueadas
  for (var i = 0; i < teclas.length; i++) {
    teclas[i].disabled = true;
    document.getElementById(teclas[i].id).className = "teclaDeshabilitada";
    teclasBloqueadas.push(teclas[i].id);
  }
}

/**
 * Función para reiniciar la partida sin recargar la web entera y así ahorrar recursos
 */
window.reiniciarPartida = function() {
  game.chooseRandomWord();
  console.log(game.word);
  palabraAdivinar = [];
  palabraMostrar = [];
  numIntentos = numIntentosOriginales;

  // Si reinicias la partida la puntuación se restablecerá
  if (nodoBotonReiniciar.textContent == "Reiniciar") {
    puntuacion = 0;
  }

  // Restablecemos la imagen y el texto del botón de reinicio
  nodoBotonReiniciar.textContent = "Reiniciar";
  document.getElementById('imagen').src = 'img/svg/horca.svg';

  // Vamos recorriendo el array de teclasBloqueadas para restablecerlas
  for (var i = 0; i < teclasBloqueadas.length; i++) {
    document.getElementById(teclasBloqueadas[i]).disabled = false;
    document.getElementById(teclasBloqueadas[i]).className = "tecla";
  }

  // Vaciamos el array de teclas bloqueadas una vez se hayan
  // desbloqueado las teclas
  teclasBloqueadas = [];

  // Lanzamos de nuevo la función de iniciar la partida
  
  iniciarPartida();
  
}

// Al cargar la página hacemos que capture el evento de tecla pulsada
window.onload = function() {
  document.onkeypress = cogerTecladoFisico;
}

// Llamamos a iniciarPartida() para iniciar la partida
iniciarPartida();