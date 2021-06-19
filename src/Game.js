const Player = require('./Player');

class Game {

    player; //Jugador
    word; //Palabra a adivinar
    correctLetters; //Guarda las letras erróneas ingresadas
    wrongLetters; //Guarda las letras erróneas ingresadas
    availableWords; //Ingreso de múltiples palabras para adivinar
    maximumNumberOfErrorsInLetters; //Número maximo de errores al ingresar letras
    maximumNumberOfErrorsInWordsInput; //Número maximo de errores al arriesgar la palabra
    failAttemptsWordChoose; //Intentos que falló al arriesgar la palabra
    timeLimitInMinutes; //Tiempo limite de juego en minutos
    difficulty; //Dificultad del juego
    lengthForEachDifficulty; //Logitud mínima de caracteres por dificultad

    constructor() {
        this.player = new Player();
        this.correctLetters = [];
        this.wrongLetters = [];
        this.availableWords = [];
        this.failAttemptsWordChoose = 0;
        this.difficulty = 1; //Por defecto será Fácil (1)
        this.lengthForEachDifficulty = [];
    };


    setLengthWordForEachDifficulty( difficulties ) {
        if( difficulties ){ 
            difficulties.forEach(( objDifficulty ) => {
                this.lengthForEachDifficulty.push(objDifficulty);
            });
            if( this.lengthForEachDifficulty.length === 3) {
                return `Fácil: ${this.lengthForEachDifficulty[0].length}, ` +
                       `Intermedio: ${this.lengthForEachDifficulty[1].length}, ` +
                       `Difícil: ${this.lengthForEachDifficulty[2].length}`;
            };
        };
    };

    setDifficulty( difficulty ) {
        if ( difficulty ) {
            let nameDifficulty;
            switch ( difficulty ) {
                case 1:
                    nameDifficulty = 'Fácil';
                    break;
                case 2:
                    nameDifficulty = 'Intermedio';
                    break;
                case 3:
                    nameDifficulty = 'Difícil';
                    break;
            };
            this.difficulty = difficulty;
            return `Dificultad elegida: ${nameDifficulty}`;
        };
    };

    getScoreInNumbers() {
        return this.correctLetters.length;
    };

    getIncorrectLetter( inputLetter ) {
        if ( inputLetter ) {
            if ( !this.word.includes( inputLetter ) ) {
                return inputLetter;
            };
        };
    };

    chooseRandomWord() {
        let index = 0;
        if ( this.availableWords.length > 1 ) {
            index = this.getRandomInt( 0, this.availableWords.length - 1 );
        } else {
            index = 0;
        }
        this.inputWord( this.availableWords[index] );
        return this.availableWords.includes( this.word );
    };


    chooseRiskyWord( selectedWord ) {
        if ( this.word === selectedWord ) {
            return 'Ganaste';
        } else {
            this.failAttemptsWordChoose++;
            if ( this.failAttemptsWordChoose === this.maximumNumberOfErrorsInWordsInput ) {
                return 'Perdiste';
            };
        };
    };

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    };

    setTimeLimit( timeLimit ) {
        if ( timeLimit ) {
            this.timeLimitInMinutes = timeLimit;
            return 'Tiempo límite de juego ingresado correctamente';
        };
        return 'Debe ingresar el tiempo';
    };

    setMaximumNumberOfErrorsInWordsInput( maximumNumberOfErrorsInWordsInput ) {
        if ( maximumNumberOfErrorsInWordsInput ) {
            this.maximumNumberOfErrorsInWordsInput = maximumNumberOfErrorsInWordsInput;
            return 'Se han guardado la cantidad máxima de errores al arriesgar la palabra'; 
        };
        return 'Debe ingresar la cantidad máxima de errores';
    };

    setMaximumNumberOfErrorsInLetters( maximumNumberOfErrorsInLetters ) {
        if ( maximumNumberOfErrorsInLetters ) {
            this.maximumNumberOfErrorsInLetters = maximumNumberOfErrorsInLetters;
            return 'Se han guardado la cantidad máxima de errores al ingresar letras'; 
        };
        return 'Debe ingresar la cantidad máxima de errores';
    };

    setAvailableWords( availableWords ) {
        if ( availableWords ) {
            this.availableWords = availableWords;
            return 'Palabras guardadas';
        };
        return 'Debe ingresar al menos una palabra';
    };

    login ( name ) {
        return this.player.login( name );
    };

    loginUserAndPassword ( username, password ) {
        return this.player.loginUserAndPassword( username, password );
    };

    inputWord( wordInput ) {
        if ( wordInput ) {
            this.word = wordInput;
            return 'Palabra guardada';
        };
    };

    chooseLetter( letter ) {
        if ( letter ) {
            let index = this.word.toLowerCase().indexOf( letter.toLowerCase() );
            if ( index !== -1 ) {
                this.correctLetters.splice( index, 0, letter );
                return 'Letra correcta';
            };
            this.wrongLetters.push( letter );
            if ( this.wrongLetters.length >= this.maximumNumberOfErrorsInLetters ) {
                return 'Perdiste';
            };
            return 'Letra incorrecta';
        };
    };

    letterPosition( letter ) {
        if ( letter ) {
            let index = this.word.toLowerCase().indexOf( letter.toLowerCase() );
            if ( index !== -1 ) {
                return this.howManyTimesLetterAppear( letter, index );
            };
        };
    };

    howManyTimesLetterAppear( letter, index ) {
        let indices = [];
        for ( index; index < this.word.length; index++ ) {
            if ( this.word[ index ].toLowerCase() === letter.toLowerCase() ) {
                indices.push( index );
            };
        };
        return indices;
    };
    
    getScore() {
        if ( this.correctLetters.every( letter => this.word.includes( letter ) ) ) {
            return 'Ganaste';
        };
    };

}

module.exports = Game;