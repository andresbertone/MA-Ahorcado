const Game = require('../src/Game');

describe.skip('Tests Release 1', () => {

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
            expect(game.letterPosition('I')).toEqual(expect.arrayContaining([2, 4]));
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


describe('Tests Release 2', () => {

    describe('Login', () => {
        
        it('Known player', () => {
            let game = new Game();
            expect(game.login('Jaimito')).toBe('Hola Jaimito');
        });
    });


    describe('Initial Configuration', () => {
        
        it('Multiple words', () => {
            let game = new Game();
            expect(game.setAvailableWords(['Agilidad', 'Fabricante', 'Elefante', 'Jirafa'])).toBe('Palabras guardadas');
        });

        it('Maximum number of errors in letters', () => {
            let game = new Game();
            expect(game.setMaximumNumberOfErrorsInLetters(6)).toBe('Se han guardado la cantidad máxima de errores al ingresar letras');
        });

        it('Maximum number of errors in words input', () => {
            let game = new Game();
            expect(game.setMaximumNumberOfErrorsInWordsInput(3)).toBe('Se han guardado la cantidad máxima de errores al arriesgar la palabra');
        });

        it('Time limit in minutes', () => {
            let game = new Game();
            expect(game.setTimeLimit(3)).toBe('Tiempo límite de juego ingresado correctamente');
        });

    });
});