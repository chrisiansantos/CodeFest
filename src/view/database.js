const mongoose = require('mongoose'); // Asegúrate de importar correctamente mongoose

const { database } = require('../keys');

mongoose.connect(database.URI, { // busca la key de la base de datos 
    useNewUrlParser: true
})
    .then(db => console.log('>>>>> DB está conectada'))
    .catch(err => console.log(err));
