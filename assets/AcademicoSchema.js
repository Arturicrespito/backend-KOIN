const mongoose = require("mongoose");

const AcademicoSchema = new mongoose.Schema(
    {

        Metodo_Transporte:String,
        Numero_Pasajes:Number,
        Dinero_Gastado:Number,
        Viajes_Realizados:Number,
        


    },{ collection:"Academico"}
);

mongoose.model("Academico", AcademicoSchema);