const express = require("express")
const router = express.Router()

const controller = require("../controllers/tipoDoacoesRecebidasController")

router.post("/", controller.criaTipo)

router.get("/", controller.mostraTipos)
router.get("/:id", controller.mostraTipo)

router.patch("/:id", controller.alteraTipo)

router.delete("/:id", controller.deletaTipo)

module.exports = router;