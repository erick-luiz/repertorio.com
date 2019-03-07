const express = require('express')
const router = express.Router()

const musicController = require("../controllers/Music.controller")

router.post("/create", musicController.create)
router.get("/", musicController.getMusics)

module.exports = router