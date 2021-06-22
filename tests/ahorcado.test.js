const Game = require('../src/Game');
const Ranking = require('../src/Ranking');

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
            expect(game.getScore()).toBe('Ganaste');
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

    describe('Start to play', () => {
        
        it('Choose a random word', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setAvailableWords(['Agilidad', 'Fabricante', 'Elefante', 'Jirafa']);
            expect(game.chooseRandomWord()).toBe(true);
        });

        it('Risky correct word', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setAvailableWords(['Jirafa']);
            game.chooseRandomWord();
            game.chooseRiskyWord('Jirafa')
            expect(game.getScore()).toBe('Ganaste');
        });
        
        it('Choose incorrect word in many attempt', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setMaximumNumberOfErrorsInWordsInput(2);
            game.setAvailableWords(['Agilidad', 'Fabricante', 'Elefante', 'Jirafa']);
            game.chooseRandomWord();
            game.chooseRiskyWord('Mono');
            game.chooseRiskyWord('Mono');
            expect(game.getScore()).toBe('Perdiste');
        });

        it('Choose an incorrect letter and show it', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setAvailableWords(['Agilidad']);
            game.chooseRandomWord();
            expect(game.getIncorrectLetter('r')).toBe('r');
        });
        
        it('Choose an incorrect letter in many attempt', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setMaximumNumberOfErrorsInLetters(2);
            game.setAvailableWords(['Agilidad']);
            game.chooseRandomWord();
            game.chooseLetter('r');
            game.chooseLetter('r');
            expect(game.getScore()).toBe('Perdiste');
        });

    });


    describe('Final Score', () => {

        it('Count total score', () => {
            let game = new Game();
            game.login('Jaimito');
            game.setAvailableWords(['Agilidad']);
            game.chooseRandomWord();
            game.chooseLetter('a');
            game.chooseLetter('g');
            game.chooseLetter('i');
            game.chooseLetter('l');
            game.chooseLetter('d');
            expect(game.getScoreInNumbers()).toEqual(8);
        });
        
        it('Ranking', () => {

            let ranking = new Ranking();

            let game1 = new Game();
            game1.login('Jaimito');
            game1.setAvailableWords(['Agilidad']);
            game1.chooseRandomWord();
            game1.chooseLetter('a');
            game1.chooseLetter('g');
            game1.chooseLetter('i');
            game1.chooseLetter('l');
            game1.chooseLetter('d');
            ranking.saveGame(game1);

            let game2 = new Game();
            game2.login('Pablito');
            game2.setAvailableWords(['Mono']);
            game2.chooseRandomWord();
            game2.chooseLetter('m');
            game2.chooseLetter('o');
            game2.chooseLetter('n');
            ranking.saveGame(game2);


            expect(ranking.getRanking()).toEqual(['Jaimito', 'Pablito']);
        });

    });

});


describe('Test Release 3', () => {

    describe('Login', () => {
        
        it('Login with username and password', () => {
            let game = new Game();
            expect(game.loginUserAndPassword('admin', 'adminpassword')).toBe(true);
        });

    });


    describe('Initial Configuration', () => {
        
        it('Select Difficulty', () => { // 1: Fácil - 2: Intermedio - 3: Difícil 
            let game = new Game();
            expect(game.setDifficulty(1)).toBe('Dificultad elegida: Fácil');
        });

        it('Select word length for each difficulty', () => { // 1: Fácil - 2: Intermedio - 3: Difícil 
            let game = new Game();
            expect(game.setLengthWordForEachDifficulty([{difficulty: 1, length: 4}, {difficulty: 2, length: 6}, {difficulty: 3, length: 8}]))
                .toBe('Fácil: 4, Intermedio: 6, Difícil: 8');
        });    
    });
    

    describe('Final Score', () => {

        it('Show score about risky correct word', () => {
            let game = new Game();
            game.loginUserAndPassword('admin', 'adminpassword');
            game.inputWord('Agilidad');
            game.chooseLetter('a');
            game.chooseLetter('g');
            game.chooseLetter('i');
            game.chooseLetter('l');
            game.chooseRiskyWord('Agilidad');
            expect(game.getScoreInNumbers()).toEqual(16);
        });
    });


});