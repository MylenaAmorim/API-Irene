const express = require("express")
const cors = require("cors")
const db = require('./databases/dbConfig')

const ong = require("./routes/ongsRoutes")
const tiposDoacoesRecebidas = require("./routes/tiposDoacoesRecebidasRoutes")

db.connect()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/ongs", ong)
app.use("/tiposDoacoesRecebidas", tiposDoacoesRecebidas)

module.exports = app


