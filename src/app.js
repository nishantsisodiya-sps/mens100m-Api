const express = require('express');
const app = express()   
require("../src/db/conn")

const MenRanking = require("../src/models/mens")
const router = require('./routers/route')
const mensRouter = require('./routers/route')   
const port = process.env.port || 5100;

app.use(express.json())
app.use(mensRouter);    

//Listening to port

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});