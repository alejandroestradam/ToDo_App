/*class Usuario {
    constructor(id, username, nombre, apellido, email, password) {
      this.id = id;
      this.username = username;
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
    }
  }
  
  module.exports = Usuario;*/
  // Usuario.js
const mongoose = require('mongoose');            //Importando mongoose.

const UsuarioSchema = new mongoose.Schema({      //Definiendo el objeto UsuarioSchema con el constructor Schema.
 username: String,                              //Definiendo cada campo con su respectivo tipo de dato.
 nombre: String,
 apellido: String, 
 email: String,
 password: String,
 ubicacion: String,
 telefono: String,
 bio: String,
 foto: String,
 tipo: String,
}, { timestamps: true });                    

mongoose.model("Usuario", UsuarioSchema);        //Define el modelo Usuario, utilizando el esquema UsuarioSchema.
