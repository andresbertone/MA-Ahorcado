class Player {
    
    name() {
        return this.name;
    }
    users() {
        return this.users;
    } //Posee los usuarios que existen en el juego
    userLogged() {
        return this.userLogged;
    }

    constructor() {
        this.users = [{ //Inicializa una lista de usuarios registrados
            username: 'admin',
            password: 'adminpassword'
        }, {
            username: 'invitado',
            password: 'invitadopassword'
        }];

        this.userLogged = {}; //Almacena el usuario y contraseña del usuario logueado
    }

    login( name ) {
        if ( name ) {
            this.name = name;
            return `Hola ${this.name}`;
        }
        return 'Hola Jugador Anónimo';
    }

    loginUserAndPassword( username, password ) {
        let found = false;
        if ( username && password ) {
            this.users.forEach(user => {
                if ( user.username === username && user.password === password ) {
                    this.userLogged = { username, password };
                    found = true;
                }
            });
            return found;
        }
    }


}

module.exports = Player;