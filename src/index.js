/**
 * -INDEXROUTES ES UN ALIAS QUE SE LE DIO A LA IMPORTACIÓN DE LA FUNCIÓN?
 * -EXPHBS ES UN ALIAS PARA LA IMPORTACIÓN DE EXPRESS HANDLEBARS
 * -LA CONSTANTE MONGOOSE Y SU USO EN ESTE ARCHIVO ES PARA EVITAR UN ERROR
 * POR EL USO OBSOLETO DE UNA FUNCIÓN EN MONGOOSE
 */

//require('dotenv').config();
import app from "./app";
import exphbs from "express-handlebars";
import "./database"
const mongoose = require("mongoose");


// const mongoose = mongoose()

 mongoose.set('strictQuery', false)
app.listen(3000)
console.log(`Server on port `, 3000)

