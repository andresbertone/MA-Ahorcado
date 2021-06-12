class Player {
    
    name;

    login( name ) {
        if ( name ) {
            return `Hola ${name}`;
        };
        return 'Hola Jugador Anónimo';
    }
}

module.exports = Player;