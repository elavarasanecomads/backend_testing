const express = require("express");
const {insertData, login} = require("../controller/userController")

const router = express.Router();

router.post("/create", insertData);
router.post("/login",login)

module.exports = router