const express = require ("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
const router = require("./Router/router");
dotenv.config();

app.listen(process.env.PORT,()=>{
    console.log("port is running on ", process.env.PORT)
})
app.use(express.json())
app.use("/api",router)
mongoose.connect("mongodb://127.0.0.1:27017/product").then(()=>{
    console.log("DB is connected");
}).catch((err)=>{
    console.log("DB is Not connected",err);

})