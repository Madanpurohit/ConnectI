const express=require('express');
const { route } = require('.');
const Router=express.Router();
const usersControllers=require('../controllers/users_controllers');
Router.get('/profile',usersControllers.profile);
Router.use('/posts',require('./post'));
module.exports=Router;