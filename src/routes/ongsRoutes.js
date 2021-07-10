const express = require("express")
const router = express.Router()

const controller = require("../controllers/ongsController")

router.post("/", controller.criaOng)

router.get("/", controller.mostraOngs)
router.get("/:id", controller.mostraOng)

router.patch("/:id", controller.alteraOng)

router.delete("/:id", controller.deletaOng)

module.exports = router;