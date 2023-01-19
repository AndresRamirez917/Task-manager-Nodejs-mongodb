import { connect } from "mongoose";
const mongoose = require("mongoose");
(async ()=>{
try {
    mongoose.set('strictQuery', false)
    //mongodb://localhost/crud-mongo
    //const db = await connect("mongodb+srv://Andreswebciclo4:w38c1c104@clusterciclo4.of0ri.mongodb.net/?retryWrites=true&w=majority")
    const db = await connect("mongodb+srv://andres:andres@cluster0.yksihko.mongodb.net/?retryWrites=true&w=majority")
    console.log("DB conectada a ", db.connection.name)
} catch (error) {
    console.error(error)
}

})()