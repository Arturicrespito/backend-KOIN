const mongoose = require("mongoose");

const AlimentacionSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Alimentacion"}
);

mongoose.model("Alimentacion", AlimentacionSchema);