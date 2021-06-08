const Player = require('./Player');

class Game {

    player;
    word;
    correctLetters;
    wrongLetters;

    constructor() {
        this.player = new Player();
        this.correctLetters = [];
        this.wrongLetters = [];
    };

    login() {
        return this.player.login();
    };

    inputWord( wordInput ) {
        if ( wordInput ) {
            this.word = wordInput.toLowerCase();
            return 'Palabra guardada';
        };
    };

    chooseLetter( letter ) {
        if ( letter ) {
            letter.toLowerCase();
            let index = this.word.indexOf( letter );
            if ( index !== -1 ) {
                this.howManyTimesLetterAppear( letter, index );
                return 'Letra correcta';
            };
            this.wrongLetters.push( letter );
            return 'Letra incorrecta';
        };
    };

    letterPosition( letter ) {
        if ( letter ) {
            let index = this.word.indexOf( letter );
            if ( index !== -1 ) {
                return index;
            };
        };
    };

    howManyTimesLetterAppear( letter, index ) {
        let indices = [];
        for ( index; index < this.word.length; index++ ) {
            if ( this.word[ index ] === letter.toLowerCase() ) {
                indices.push( index );
                this.correctLetters.splice( index, 0, letter );
            };
        };
        return indices;
    };
    
    score() {
        if ( this.correctLetters.every( letter => this.word.includes( letter ) ) ) {
            return 'Ganaste';
        }
    };

}

module.exports = Game;