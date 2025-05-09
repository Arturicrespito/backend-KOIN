const mongoose = require("mongoose");

const SuscripcionesSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Suscripciones"}
);

mongoose.model("Suscripciones", SuscripcionesSchema);