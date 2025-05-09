const mongoose = require("mongoose");

const TarjetaSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Tarjeta"}
);

mongoose.model("Tarjeta", TarjetaSchema);