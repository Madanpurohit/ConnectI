const express=require('express');
const Router=express.Router();
const postControllers=require('../controllers/post_controllers');
const { route } = require('./users');
Router.get('/',postControllers.post);
module.exports=Router;