const SharedFunction = {};

let games = [];

SharedFunction.saveGame = ( game ) => {
    games.push( game );
};

SharedFunction.getRanking = () => {
    
    let playerNames = [];
    
    games.sort( (game1, game2) => {
        if ( game1.getScoreInNumbers() < game2.getScoreInNumbers() ) {
            return 1;
        };
        if ( game1.getScoreInNumbers() > game2.getScoreInNumbers() ) {
            return -1;
        };
        return 0;
    });

    games.forEach( game => {
        playerNames.push( game.player.name );
    });
    return playerNames;
};

module.exports = SharedFunction;