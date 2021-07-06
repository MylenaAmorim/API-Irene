require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//conexão ao mongodb

let db = mongoose.connection;

db.on("error", console.log.bind(console, "Erro na conexão com o Mongo:"));
db.once("open", () => {
    console.log("Conexão com o Mongo feita com sucesso.")
});

//configurar bodyParser ????
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) { //passar parametros em função anonima ????
    res.header("Access-Control-Allow-Origin", "*") 
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
});

//rotas

module.exports = app

