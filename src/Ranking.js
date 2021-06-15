
class Ranking {

    games;

    constructor() {
        this.games = [];
    }

    saveGame( game ) {
        this.games.push( game );
    }

    getRanking() {
    
        let playerNames = [];
        
        this.games.sort( (game1, game2) => {
            if ( game1.getScoreInNumbers() < game2.getScoreInNumbers() ) {
                return 1;
            };
            if ( game1.getScoreInNumbers() > game2.getScoreInNumbers() ) {
                return -1;
            };
            return 0;
        });
    
        this.games.forEach( game => {
            playerNames.push( game.player.name );
        });

        return playerNames;
    }


}


module.exports = Ranking;