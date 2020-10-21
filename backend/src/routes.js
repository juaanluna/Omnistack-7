const express = require('express')
const multer = require('multer');
const PostController = require('./controllers/PostController')
const uploadsConfig = require('./config/upload');
const likeController = require('./controllers/likeController');

const routes = new express.Router()
const upload = multer(uploadsConfig);

routes.get('/posts', PostController.index);
routes.post('/posts',upload.single('image'), PostController.store);

routes.post('/posts/:id/like', likeController.store);

module.exports = routes;