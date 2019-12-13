const express = require('express')
const router = express.Router()

const musicController = require("../controllers/Music.controller")

router.post("/create", musicController.create)
router.get("/", musicController.getMusics)
router.get("/teste", musicController.teste)
router.put("/:musicId", musicController.update)
router.delete("/:musicId", musicController.delete)
router.get("/:musicId", musicController.getById)

module.exports = router