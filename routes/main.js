const express = require('express')
const mainController = require("../controllers/main")
const router = express.Router()

router.get("/", mainController.returnHelloWorld);

router.get("/:id", mainController.returnUserId)

module.exports = router;