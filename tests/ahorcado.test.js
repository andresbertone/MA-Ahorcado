const Game = require('../src/Game');

describe('Tests Release 1', () => {

    describe('Login', () => {
        
        it('Anonymous player', () => {
            let game = new Game();
            expect(game.login()).toBe('Hola Jugador Anónimo');
        });
    });


    describe('Initial Configuration', () => {
        
        it('Harcoded word', () => {
            let game = new Game();
            expect(game.inputWord('Agilidad')).toBe('Palabra guardada');
        });
    });


    describe('Start to play', () => {
        
        it('Correct letter', () => {
            let game = new Game();
            game.inputWord('Agilidad');
            expect(game.chooseLetter('l')).toBe('Letra correcta');
        });

        it("Letter position", () => {
            let game = new Game();
            game.inputWord('Agilidad');
            expect(game.letterPosition('l')).toBe(3);
        });

        it('Incorrect letter', () => {
            let game = new Game();
            game.inputWord('Agilidad');
            expect(game.chooseLetter('f')).toBe('Letra incorrecta');
        });
    });


    describe('Final Score', () => {

        it('Return "Ganaste"', () => {
            let game = new Game();
            game.inputWord('Agilidad');
            game.chooseLetter('a');
            game.chooseLetter('g');
            game.chooseLetter('f'); // letra incorrecta
            game.chooseLetter('i');
            game.chooseLetter('l');
            game.chooseLetter('t'); // letra incorrecta
            game.chooseLetter('d');
            expect(game.score()).toBe('Ganaste');
        }); 
    });

});