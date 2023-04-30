const mongoose = require("mongoose");
const userSchema = require("../module/userSchema")
const bcrypt = require("bcrypt");


const insertData = async (req, res) => {

    const hashPassword = await bcrypt.hash("req.body.password", 7)
    const userData = new userSchema({
        ...req.body,
        password: hashPassword
    })
    const saveData = await userData.save();
    res.json(saveData);
}

const login = async (req, res) => {
    const userEmail = await userSchema.findOne({ email: req.body.email })
    if (!userEmail) { return res.json("Email is not valid"); }
     
    const userPassword = await bcrypt.compare(req.body.password, userEmail.password)    
    if (!userPassword) { return res.json("password is not valid"); }

    res.json("login Success");
}


module.exports = { insertData, login }