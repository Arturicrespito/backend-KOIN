const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {

        Nombre:String,
        Edad:Number,
        Direccion:String,
        Identificacion:String,
        Correo_Electronico:String,
        Contraseña:String


    },{ collection:"Usuarios"}
);

mongoose.model("Usuarios", UserSchema);