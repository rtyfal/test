const express = require("express")
const userController = require("../controllers/user")
const router = express.Router()

router.post("/create",userController.createUser)

router.get("/:id",userController.getUserById )

router.get("/",userController.getAllUsers)

module.exports = router