const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app= express();

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(5000,function(){
    console.log("Conectado correctamete al puerto 5000");
});

const bbdd = "Aplicaion_Financiera";
const url = "mongodb+srv://chepipes:chepipes@cluster0.pamfy.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=Cluster0";

const connection = mongoose.connect(url);

connection.then(function(){
    console.log("Conectado a la BBD");
}).catch(function(err){
    console.log("La conexion Fallo: Error "+err);
});

require("./assets/UsuarioSchema.js");
const Usuarios= mongoose.model("Usuarios");

require("./assets/TransporteSchema.js");
const Transporte= mongoose.model("Transporte");

require("./assets/AlimentacionSchema.js");
const Alimentacion= mongoose.model("Alimentacion");

require("./assets/AcademicoSchema.js");
const Academico= mongoose.model("Academico");

require("./assets/Metas_FinacierasSchema.js");
const Metas_Financieras= mongoose.model("Metas_Financieras");

require("./assets/SalidasSchema.js");
const Salidas= mongoose.model("Salidas");

require("./assets/SuscripcionesSchema.js");
const Suscripciones= mongoose.model("Suscripciones");

require("./assets/EconomicoSchema.js");
const Economico= mongoose.model("Economico");

require("./assets/TarjetaSchema.js");
const Tarjeta= mongoose.model("Tarjeta");

app.post("/registrar",async function(req,res){
    const { Nombre,Edad,Direccion,Identificacion,Correo,Contraseña} = req.body;
    const usuarioExistente = Usuarios.findOne({Correo});
    
    if(usuarioExistente){
        return res.send({
            status: false,
            message: "El correo ya esta registrado"
    });
    }

    try{
        await Usuarios.create({
            Nombre,
            Edad,
            Direccion,
            Identificacion,
            Corrreo,
            Contraseña
        });
        res.send({
            status:true,
            message:"Se creo el usuario correctamente"
        });
    }

    catch(error){

        res.send({
            status:false,
            message:"Error al registrar el usuario",
            error: err.message
        })

    }

});


app.get("/usuarios-todos/nombre-completo", async function(req,res){
    try{
        const Usuarios = await Usuarios.find({},"Nombre");
        res.send({
            status: true,
            message: "Consulta exitosa",
            data:Usuarios
        });
    }
    catch(error){
        res.send({
            status: false,
            message: "Error al consultar base de datos",
            error: error.mesage
        })
    }     
});
