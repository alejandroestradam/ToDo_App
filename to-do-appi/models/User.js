class Usuario {
    constructor(id, username, nombre, apellido, email, password) {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = Usuario;