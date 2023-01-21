import { connect } from "mongoose";
import { MONGODB_URI } from "./config";
//require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI
10
console.log(process.env.MONGODB_URI)
const mongoose = require("mongoose");
(async ()=>{
try {
    mongoose.set('strictQuery', false)
    //mongodb://localhost/crud-mongo
    //const db = await connect("mongodb+srv://Andreswebciclo4:w38c1c104@clusterciclo4.of0ri.mongodb.net/?retryWrites=true&w=majority")
    //const db = await connect(/*MONGODB_URI*/"mongodb+srv://andres:andres@cluster0.yksihko.mongodb.net/?retryWrites=true&w=majority")
    const db = await connect(MONGODB_URI)
    console.log("DB conectada a ", db.connection.name)
} catch (error) {
    console.error(error)
}

})()