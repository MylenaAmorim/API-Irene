const express = require("express")
const router = express.Router()

const controller = require("../controller/ongController")

router.get("/", controller.mostraOngs)
router.get("/:id", controller.mostraOng)

router.post("/", controller.criaOng)

router.patch("/:id", controller.patch)

router.delete("/:id", controller.delete)

module.exports = router;