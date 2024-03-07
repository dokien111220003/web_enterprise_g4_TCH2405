const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config()

const app = express()
const port = process.env.PORT || 3001



mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('Connect Db success!')
    })
    .catch((err) => {
        console.log(err)
    })
app.listen(port, () => {
    console.log('Server is running in port: ', + port)
})  