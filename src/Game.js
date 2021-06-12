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

    login( name ) {
        return this.player.login( name );
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
    
    score() {
        if ( this.correctLetters.every( letter => this.word.includes( letter ) ) ) {
            return 'Ganaste';
        };
    };

}

module.exports = Game;