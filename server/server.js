require('./config/config');

const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))
 


mongoose.connect('mogodb://localhost:2707/cafe', (err,res) =>{
    if (err) throw err;
    console.log('Base de datos ONLIE')
})


app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ', process.env.PORT)
});