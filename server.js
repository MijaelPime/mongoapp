const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const mongose = require('mongoose');

const api = require("./api"); //traigo todo de la carpeta api

app.use('/api',api); //app.use es un middleware, cualquier peticion la delego a index.js en este caso.

app.listen(process.env.PORT, function(){
    console.log(`inicia el servidor:${process.env.PORT}`);
    console.log(`http://localhost:${process.env.PORT}`); 
});

mongose.connect(process.env.MONGO_DB, { useNewUrlParser: true })
.then(function(result){
    console.log('se conecto mongo');
})
.catch(function(err){
    console.log(err);
});