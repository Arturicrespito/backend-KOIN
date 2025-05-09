const mongoose = require("mongoose");

const EconomicoSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Economico"}
);

mongoose.model("Economico", EconomicoSchema);