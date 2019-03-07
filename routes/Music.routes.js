const express = require('express')
const router = express.Router()

const musicController = require("../controllers/Music.controller")

router.post("/create", musicController.create)
router.get("/", musicController.getMusics)
router.get("/teste", musicController.teste)

module.exports = router