const mongoose = require("mongoose");

const Metas_FinancierasSchema = new mongoose.Schema(
    {

        Mercado:Number,
        Restaurante:Number,
        Alimentacion_Universidad_Trabajo:Number,
        Lugar:String,
        


    },{ collection:"Metas_Financieras"}
);

mongoose.model("Metas_Financieras", Metas_FinancierasSchema);