/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/Game */ \"./src/model/Game.js\");\n/* harmony import */ var _model_Game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_Game__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n// Inicializamos un juego nuevo\r\nlet game = new (_model_Game__WEBPACK_IMPORTED_MODULE_0___default())();\r\n\r\ngame.setAvailableWords(['Agilidad', 'Fabricante', 'Elefante', 'Jirafa', 'Cabra', 'Periferico', 'Teclado']);\r\ngame.setMaximumNumberOfErrorsInLetters(6);\r\ngame.setMaximumNumberOfErrorsInWordsInput(3);\r\ngame.chooseRandomWord();\r\ngame.failAttemptsWordChoose = 0;\r\n\r\nlet puntuacion = 0; // 25 puntos si aciertas; -15 puntos si fallas\r\nlet numIntentos = game.maximumNumberOfErrorsInLetters;\r\nlet numIntentosOriginales = numIntentos;\r\nlet palabraAdivinar = [];\r\nlet palabraMostrar = [];\r\nlet teclasBloqueadas = [];\r\n\r\nlet nodoResultado = document.querySelector('#resultado').firstChild;\r\nlet nodoIntentos = document.querySelector('#intentos');\r\nlet nodoIntentosOriginales = document.querySelector('#intentosOriginales');\r\nlet nodoPuntuacion = document.querySelector('#puntuacionH2');\r\nlet stateGame = document.getElementById('stateGame');\r\n\r\n\r\n/**\r\n * Función para arriesgar la palabra\r\n */\r\n window.arriesgarPalabra = function () {\r\n  const riskyWord = document.getElementById('riskFieldWord').value.toLowerCase();\r\n  if ( !riskyWord ) {\r\n    return;\r\n  }\r\n  game.chooseRiskyWord(riskyWord);\r\n  const score = game.getScore();\r\n\r\n  if (score === 'Ganaste') {\r\n    gameWin();\r\n  } else if (score === 'Perdiste') {\r\n    gameLost();\r\n  } \r\n  \r\n  document.getElementById('riskFieldWord').value = '';\r\n}; \r\n\r\n/**\r\n * Función para comprobar si la tecla pulsada es correcta\r\n */\r\n window.comprobarTecla = function(letraUsuario) {\r\n  \r\n  // Obtengo la/s posicion/es de la letra en la palabra\r\n  const correctLetters = game.letterPosition(letraUsuario);\r\n  if (correctLetters) {\r\n    correctLetters.forEach((position) => {\r\n      palabraMostrar[position] = letraUsuario;\r\n      document.getElementById(\"tecla\" + letraUsuario).disabled = true;\r\n      document.getElementById(\"tecla\" + letraUsuario).className = \"teclaDeshabilitada\";\r\n      teclasBloqueadas.push(\"tecla\" + letraUsuario);\r\n      puntuacion += 25;\r\n      });\r\n  }\r\n\r\n  // Si no está la letra....\r\n  const correctLetter = game.chooseLetter(letraUsuario) === 'Letra correcta';\r\n  if (!correctLetter) {\r\n    if (numIntentos > 0) {\r\n        numIntentos -= 1;\r\n        puntuacion -= 15;\r\n      }\r\n\r\n    if (numIntentos === 5) {\r\n      document.getElementById('imagen').src = 'img/svg/cabeza.svg';\r\n    } else if (numIntentos === 4) {\r\n      document.getElementById('imagen').src = 'img/svg/cuerpo.svg';\r\n    } else if (numIntentos === 3) {\r\n      document.getElementById('imagen').src = 'img/svg/brazoIzq.svg';\r\n    } else if (numIntentos === 2) {\r\n      document.getElementById('imagen').src = 'img/svg/brazoDer.svg';\r\n    } else if (numIntentos === 1) {\r\n      document.getElementById('imagen').src = 'img/svg/piernaIzq.svg';\r\n    } else if (numIntentos === 0) {\r\n      document.getElementById('imagen').src = 'img/svg/piernaDer.svg';\r\n    }\r\n\r\n    // Bloqueamos la tecla deshabilitando el botón y cambiando su clase\r\n    document.getElementById(\"tecla\" + letraUsuario).disabled = true;\r\n    document.getElementById(\"tecla\" + letraUsuario).className = \"teclaDeshabilitada\";\r\n\r\n    // Añadimos la tecla a un array para posteriormente trabajar con ellas\r\n    teclasBloqueadas.push(\"tecla\" + letraUsuario);\r\n  }\r\n  estadoPartida();\r\n  actualizarDatosPantalla();\r\n};\r\n\r\n/**\r\n * Función para reiniciar la partida sin recargar la web entera y así ahorrar recursos\r\n */\r\n window.reiniciarPartida = function() {\r\n  game.chooseRandomWord();\r\n  clearVariables();\r\n  numIntentos = numIntentosOriginales;\r\n\r\n  // Si reinicias la partida la puntuación se restablecerá\r\n  puntuacion = 0;\r\n  stateGame.innerHTML = '';\r\n\r\n  // Restablecemos la imagen\r\n  document.getElementById('imagen').src = 'img/svg/horca.svg';\r\n\r\n  // Vamos recorriendo el array de teclasBloqueadas para restablecerlas\r\n  for (let i = 0; i < teclasBloqueadas.length; i++) {\r\n    document.getElementById(teclasBloqueadas[i]).disabled = false;\r\n    document.getElementById(teclasBloqueadas[i]).className = \"tecla\";\r\n  }\r\n\r\n  document.getElementById('riskedWordButton').className = \"tecla\";\r\n  document.getElementById('riskedWordButton').disabled = false;\r\n\r\n  // Vaciamos el array de teclas bloqueadas una vez se hayan\r\n  // desbloqueado las teclas\r\n  teclasBloqueadas = [];\r\n  game.failAttemptsWordChoose = 0;\r\n\r\n  document.getElementById('riskFieldWord').value = '';\r\n\r\n  iniciarPartida();\r\n};\r\n\r\n/**\r\n * Función para bloquear todas las teclas del teclado, la usaremos cuando finalice la partida\r\n */\r\n function bloquearTodasTeclas() {\r\n  // Guardamos en un array todos los botones con la clase tecla\r\n  let teclas = document.querySelectorAll('button.tecla');\r\n\r\n  // Recorremos la lista y vamos deshabilitando las teclas, cambiando su estilo\r\n  // y las añadimos a la lista de teclas bloqueadas\r\n  for (let i = 0; i < teclas.length; i++) {\r\n    teclas[i].disabled = true;\r\n    document.getElementById(teclas[i].id).className = \"teclaDeshabilitada\";\r\n    teclasBloqueadas.push(teclas[i].id);\r\n  }\r\n\r\n  document.getElementById('riskedWordButton').className = \"teclaDeshabilitada\";\r\n}\r\n\r\nfunction iniciarPartida() {\r\n\r\n  let palabraAleatoria = game.word;\r\n\r\n  // Guardamos en tamanioPalabraAleatoria el tamaño de la palabra seleccionada aleatoriamente\r\n  let tamanioPalabraAleatoria = game.word.length;\r\n\r\n  // Guardamos en palabraAdivinar (array) cada uno de los caracteres de la palabra aleatoria\r\n  // En palabraMostrar guardaremos tantos guiones como caracteres tiene la palabra aleatoria\r\n  for (let i = 0; i < tamanioPalabraAleatoria; i++) {\r\n    // Si el caracter elegido no es una letra...\r\n    if (!palabraAleatoria.charAt(i).match(/[a-zñA-ZÑ]/)) {\r\n      // Introducimos en la lista de la palabraAdivinar y palabraMostrar el caracter\r\n      palabraAdivinar.push(palabraAleatoria.charAt(i));\r\n      palabraMostrar.push(palabraAleatoria.charAt(i));\r\n      // Si lo es...\r\n    } else {\r\n      // Introducimos el caracter en palabraAdivinar y un guión en palabraMostrar\r\n      palabraAdivinar.push(palabraAleatoria.charAt(i).toLowerCase());\r\n      palabraMostrar.push(\"_\");\r\n    }\r\n  }\r\n\r\n  // Mostramos el máximo de números errores con nodoIntentosOriginales.textContent\r\n  nodoIntentosOriginales.textContent = numIntentosOriginales;\r\n\r\n  // Llamamos a actualizarDatosPantalla() para refrescar los datos en la pantalla\r\n  actualizarDatosPantalla();\r\n}\r\n\r\n/**\r\n * Función para dibujar los cambios en pantalla\r\n */\r\nfunction actualizarDatosPantalla() {\r\n  // Pasamos palabraMostrar a un String y separamos cada posición con un espacio con el método join()\r\n  // Luego lo mostramos en el div resultado con nodoResultado.textContent y en mayúsculas\r\n  nodoResultado.textContent = palabraMostrar.join(' ').toUpperCase();\r\n\r\n  // Mostramos el números de intentos actuales con nodoIntentos.textContent\r\n  nodoIntentos.textContent = numIntentos;\r\n\r\n  // Mostramos la puntuación del usuario\r\n  nodoPuntuacion.textContent = puntuacion + \" PUNTOS\";\r\n}\r\n\r\n/**\r\n * Función para comprobar si ya ha acabado el juego\r\n */\r\nfunction estadoPartida() {\r\n  // Si no quedan guiones...\r\n  if (!palabraMostrar.includes('_')) {\r\n    gameWin();\r\n  }\r\n\r\n  if (numIntentos === 0) {\r\n    // Bloqueamos todas las teclas para que el usuario no pueda clickar las restantes\r\n    bloquearTodasTeclas();\r\n    stateGame.innerHTML = 'PERDISTE';\r\n    // Igualamos palabraMostrar a palabraAdivinar para mostrar la palabra\r\n    // a encontrar cuando hayamos perdido\r\n    palabraMostrar = palabraAdivinar;\r\n  }\r\n}\r\n\r\n/**\r\n * Función que gana el juego\r\n */\r\nfunction gameWin() {\r\n  // Bloqueamos todas las teclas para que el usuario no pueda clickar las restantes\r\n  bloquearTodasTeclas();\r\n  palabraMostrar = palabraAdivinar;\r\n  // Mostramos una nueva imagen\r\n  document.getElementById('imagen').src = 'img/svg/victoria.svg';\r\n  stateGame.innerHTML = \"GANASTE\";\r\n\r\n  actualizarDatosPantalla();\r\n}\r\n\r\n/**\r\n * Función que pierde el juego\r\n */\r\nfunction gameLost() {\r\n  // Bloqueamos todas las teclas para que el usuario no pueda clickar las restantes\r\n  bloquearTodasTeclas();\r\n\r\n  // Igualamos palabraMostrar a palabraAdivinar para mostrar la palabra\r\n  // a encontrar cuando hayamos perdido\r\n  palabraMostrar = palabraAdivinar;\r\n\r\n  stateGame.innerHTML = 'PERDISTE';\r\n\r\n  document.getElementById('imagen').src = 'img/svg/cabeza.svg';\r\n  document.getElementById('imagen').src = 'img/svg/cuerpo.svg';\r\n  document.getElementById('imagen').src = 'img/svg/brazoIzq.svg';\r\n  document.getElementById('imagen').src = 'img/svg/brazoDer.svg';\r\n  document.getElementById('imagen').src = 'img/svg/piernaIzq.svg';\r\n  document.getElementById('imagen').src = 'img/svg/piernaDer.svg';\r\n  \r\n  actualizarDatosPantalla();\r\n}\r\n\r\nfunction clearVariables() {\r\n  palabraAdivinar = [];\r\n  palabraMostrar = [];\r\n}\r\n\r\n\r\niniciarPartida();\n\n//# sourceURL=webpack://MA-Ahorcado/./src/index.js?");

/***/ }),

/***/ "./src/model/Game.js":
/*!***************************!*\
  !*** ./src/model/Game.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Player = __webpack_require__(/*! ./Player */ \"./src/model/Player.js\");\r\n\r\nclass Game {\r\n\r\n    player() {\r\n        return this.player;\r\n    } //Jugador\r\n    word() {\r\n        return this.word;\r\n    } //Palabra a adivinar\r\n    correctLetters() {\r\n        return this.correctLetters;\r\n    } //Guarda las letras erróneas ingresadas\r\n    wrongLetters() {\r\n        return this.wrongLetters;\r\n    } //Guarda las letras erróneas ingresadas\r\n    availableWords() {\r\n        return this.availableWords;\r\n    } //Ingreso de múltiples palabras para adivinar\r\n    maximumNumberOfErrorsInLetters() {\r\n        return this.maximumNumberOfErrorsInLetters;\r\n    } //Número maximo de errores al ingresar letras\r\n    maximumNumberOfErrorsInWordsInput() {\r\n        return this.maximumNumberOfErrorsInWordsInput;\r\n    } //Número maximo de errores al arriesgar la palabra\r\n    failAttemptsWordChoose() {\r\n        return this.failAttemptsWordChoose;\r\n    } //Intentos que falló al arriesgar la palabra\r\n    timeLimitInMinutes() {\r\n        return this.timeLimitInMinutes;\r\n    } //Tiempo limite de juego en minutos\r\n    difficulty() {\r\n        return this.difficulty;\r\n    } //Dificultad del juego\r\n    lengthForEachDifficulty() {\r\n        return this.lengthForEachDifficulty;\r\n    } //Logitud mínima de caracteres por dificultad\r\n    totalScore() {\r\n        return this.totalScore;\r\n    } // Guarda el puntaje total\r\n    riskedWord() { \r\n        return this.riskedWord;\r\n    } //Palabra arriesgada\r\n\r\n    constructor() {\r\n        this.player = new Player();\r\n        this.correctLetters = [];\r\n        this.wrongLetters = [];\r\n        this.availableWords = [];\r\n        this.failAttemptsWordChoose = 0;\r\n        this.difficulty = 1; //Por defecto será Fácil (1)\r\n        this.lengthForEachDifficulty = [];\r\n        this.totalScore = 0;\r\n        this.riskedWord = '';\r\n    }\r\n\r\n\r\n    setLengthWordForEachDifficulty( difficulties ) {\r\n        if( difficulties ){ \r\n            this.lengthForEachDifficulty = difficulties;\r\n            if( this.lengthForEachDifficulty.length === 3) {\r\n                return `Fácil: ${this.lengthForEachDifficulty[0].length}, ` +\r\n                       `Intermedio: ${this.lengthForEachDifficulty[1].length}, ` +\r\n                       `Difícil: ${this.lengthForEachDifficulty[2].length}`;\r\n            }\r\n        }\r\n    }\r\n\r\n    setDifficulty( difficulty ) {\r\n        if ( difficulty ) {\r\n            let nameDifficulty;\r\n            switch ( difficulty ) {\r\n                case 1:\r\n                    nameDifficulty = 'Fácil';\r\n                    break;\r\n                case 2:\r\n                    nameDifficulty = 'Intermedio';\r\n                    break;\r\n                case 3:\r\n                    nameDifficulty = 'Difícil';\r\n                    break;\r\n            }\r\n            this.difficulty = difficulty;\r\n            return `Dificultad elegida: ${nameDifficulty}`;\r\n        }\r\n    }\r\n\r\n    \r\n    getIncorrectLetter( inputLetter ) {\r\n        if ( inputLetter ) {\r\n            if ( !this.word.includes( inputLetter ) ) {\r\n                return inputLetter;\r\n            }\r\n        }\r\n    }\r\n\r\n    chooseRandomWord() {\r\n        let index = 0;\r\n        this.availableWords = this.availableWords.map(word => word.toLowerCase());\r\n        if ( this.availableWords.length > 1 ) {\r\n            index = this.getRandomInt( 0, this.availableWords.length - 1 );\r\n        } else {\r\n            index = 0;\r\n        }\r\n        this.inputWord( this.availableWords[index].toLowerCase() );\r\n        return this.availableWords.includes( this.word );\r\n    }\r\n\r\n    \r\n    chooseRiskyWord( selectedWord ) {\r\n        selectedWord = selectedWord.toLowerCase();\r\n        if ( this.word.toLowerCase() === selectedWord ) {\r\n            this.riskedWord = selectedWord;\r\n            this.totalScore += 10;\r\n        } else {\r\n            this.failAttemptsWordChoose++;\r\n        }\r\n    }\r\n    \r\n    getRandomInt(min, max) {\r\n        return Math.floor(Math.random() * (max + 1 - min)) + min;\r\n    }\r\n\r\n    setTimeLimit( timeLimit ) {\r\n        if ( timeLimit ) {\r\n            this.timeLimitInMinutes = timeLimit;\r\n            return 'Tiempo límite de juego ingresado correctamente';\r\n        }\r\n        return 'Debe ingresar el tiempo';\r\n    }\r\n    \r\n    setMaximumNumberOfErrorsInWordsInput( maximumNumberOfErrorsInWordsInput ) {\r\n        if ( maximumNumberOfErrorsInWordsInput ) {\r\n            this.maximumNumberOfErrorsInWordsInput = maximumNumberOfErrorsInWordsInput;\r\n            return 'Se han guardado la cantidad máxima de errores al arriesgar la palabra'; \r\n        }\r\n        return 'Debe ingresar la cantidad máxima de errores';\r\n    }\r\n\r\n    setMaximumNumberOfErrorsInLetters( maximumNumberOfErrorsInLetters ) {\r\n        if ( maximumNumberOfErrorsInLetters ) {\r\n            this.maximumNumberOfErrorsInLetters = maximumNumberOfErrorsInLetters;\r\n            return 'Se han guardado la cantidad máxima de errores al ingresar letras'; \r\n        }\r\n        return 'Debe ingresar la cantidad máxima de errores';\r\n    }\r\n    \r\n    setAvailableWords( availableWords ) {\r\n        if ( availableWords ) {\r\n            this.availableWords = availableWords;\r\n            return 'Palabras guardadas';\r\n        }\r\n        return 'Debe ingresar al menos una palabra';\r\n    }\r\n\r\n    login ( name ) {\r\n        return this.player.login( name );\r\n    }\r\n\r\n    loginUserAndPassword ( username, password ) {\r\n        return this.player.loginUserAndPassword( username, password );\r\n    }\r\n\r\n    inputWord( wordInput ) {\r\n        if ( wordInput ) {\r\n            this.word = wordInput;\r\n            return 'Palabra guardada';\r\n        }\r\n    }\r\n    \r\n    chooseLetter( letter ) {\r\n        if ( letter ) {\r\n            let index = this.word.toLowerCase().indexOf( letter.toLowerCase() );\r\n            if ( index !== -1 ) {\r\n                this.correctLetters.splice( index, 0, letter );\r\n                let quantityAppears = this.howManyTimesLetterAppear( letter, index ).length; \r\n                this.totalScore += quantityAppears;\r\n                return 'Letra correcta';\r\n            }\r\n            this.wrongLetters.push( letter );\r\n            return 'Letra incorrecta';\r\n        }\r\n    }\r\n    \r\n    letterPosition( letter ) {\r\n        if ( letter ) {\r\n            let index = this.word.toLowerCase().indexOf( letter.toLowerCase() );\r\n            if ( index !== -1 ) {\r\n                return this.howManyTimesLetterAppear( letter, index );\r\n            }\r\n        }\r\n    }\r\n\r\n    howManyTimesLetterAppear( letter, index ) {\r\n        let indices = [];\r\n        for ( index; index < this.word.length; index++ ) {\r\n            if ( this.word[ index ].toLowerCase() === letter.toLowerCase() ) {\r\n                indices.push( index );\r\n            }\r\n        }\r\n        return indices;\r\n    }\r\n    \r\n    getScore() {\r\n\r\n        if (this.word === this.riskedWord) {\r\n            return 'Ganaste';\r\n        }\r\n\r\n        if ( this.wrongLetters.length >= this.maximumNumberOfErrorsInLetters || \r\n             this.failAttemptsWordChoose >= this.maximumNumberOfErrorsInWordsInput ) {\r\n                 \r\n            return 'Perdiste';\r\n       }\r\n\r\n       if ( !this.riskedWord && this.correctLetters.length > 0 && \r\n            this.correctLetters.every( letter => this.word.includes( letter )) \r\n          ) {            \r\n            return 'Ganaste';\r\n       }   \r\n\r\n    }\r\n\r\n    getScoreInNumbers() {\r\n        return this.totalScore;\r\n    }\r\n    \r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://MA-Ahorcado/./src/model/Game.js?");

/***/ }),

/***/ "./src/model/Player.js":
/*!*****************************!*\
  !*** ./src/model/Player.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Player {\r\n    \r\n    name() {\r\n        return this.name;\r\n    }\r\n    users() {\r\n        return this.users;\r\n    } //Posee los usuarios que existen en el juego\r\n    userLogged() {\r\n        return this.userLogged;\r\n    }\r\n\r\n    constructor() {\r\n        this.users = [{ //Inicializa una lista de usuarios registrados\r\n            username: 'admin',\r\n            password: 'adminpassword'\r\n        }, {\r\n            username: 'invitado',\r\n            password: 'invitadopassword'\r\n        }];\r\n\r\n        this.userLogged = {}; //Almacena el usuario y contraseña del usuario logueado\r\n    }\r\n\r\n    login( name ) {\r\n        if ( name ) {\r\n            this.name = name;\r\n            return `Hola ${this.name}`;\r\n        }\r\n        return 'Hola Jugador Anónimo';\r\n    }\r\n\r\n    loginUserAndPassword( username, password ) {\r\n        let found = false;\r\n        if ( username && password ) {\r\n            this.users.forEach(user => {\r\n                if ( user.username === username && user.password === password ) {\r\n                    this.userLogged = { username, password };\r\n                    found = true;\r\n                }\r\n            });\r\n            return found;\r\n        }\r\n    }\r\n\r\n\r\n}\r\n\r\nmodule.exports = Player;\n\n//# sourceURL=webpack://MA-Ahorcado/./src/model/Player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;