class Player {
    
    name;

    login( name ) {
        if ( name ) {
            this.name = name;
            return `Hola ${this.name}`;
        };
        return 'Hola Jugador Anónimo';
    }
}

module.exports = Player;