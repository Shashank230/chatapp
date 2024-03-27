const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const colors = require('colors')
const connectdb = require('./configs/db')


const app = express()


const port = process.env.PORT || 5000;
connectdb()

app.listen(port,()=>{
    console.log(`server running on port ${port}`.bgCyan.white);
})