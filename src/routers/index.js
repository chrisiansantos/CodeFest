const express = require('express')
const router = express.Router();

const home = require('../controllers/home.js')
const image = require('../controllers/image.js')

module.exports = app =>{
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image_id/like', image.like);
    router.post('/image/:image_id/comment', image.comment);
    router.delete('/image/:image_id/comment', image.remove);

    app.use(router);

};