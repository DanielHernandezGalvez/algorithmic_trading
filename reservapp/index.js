import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";



dotenv.config()

const app = express();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("CONECTADOS A MONGOdb")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("connected", () => {
    console.log("mongoDB conectado")
})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB desconectado")
})

app.listen(8800, () => {
    connect()
    console.log("Conectado al backend");
})