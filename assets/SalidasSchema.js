const mongoose = require("mongoose");

const SalidasSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Salidas"}
);

mongoose.model("Salidas", SalidasSchema);