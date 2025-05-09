const mongoose = require("mongoose");

const TransporteSchema = new mongoose.Schema(
    {

        Metodo_Transporte:String,
        Numero_Pasajes:Number,
        Dinero_Gastado:Number,
        Viajes_Realizados:Number,
        


    },{ collection:"Transporte"}
);

mongoose.model("Transporte", TransporteSchema);