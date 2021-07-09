const express = require("express")
const cors = require("cors")
const db = require("./databases/dbConfig")

const index = require("./routes/ongsRoutes")
db.connect()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/", index)

module.exports = app


