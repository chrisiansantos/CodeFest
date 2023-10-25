const express = require('express');

const config = require('./server/config.js')
const app = config(express());

//base de datos 
require('./view/database.js')


// Iniciar el server 
app.listen(app.get('port'), () =>{
    console.log('Server en el puerto', app.get('port'));
});