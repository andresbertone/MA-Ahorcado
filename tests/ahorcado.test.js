const Game = require('../src/Game');

describe('Test Release 1', () => {

    describe('Login', () => {
        
        it('Anonymous player', () => {
            let game = new Game();
            expect(game.login()).toBe('Hola Jugador Anónimo');
        });
    });


    describe('Initial Configuration', () => {
        
        it('Harcoded Word', () => {
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

    describe.skip('Score', () => {

        it('Response "You won"', () => {
            let game = new Game();
            game.inputWord('Agilidad');
            game.chooseLetter('a');
            game.chooseLetter('g');
            game.chooseLetter('i');
            game.chooseLetter('l');
            game.chooseLetter('i');
            game.chooseLetter('d');
            game.chooseLetter('a');
            game.chooseLetter('d');
            expect(game.score()).toBe('Ganaste');       // Terminar test
        });
    });



});