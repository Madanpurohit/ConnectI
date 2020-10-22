const express=require('express');
const passport = require('passport');
const Router=express.Router();
const postController=require('../controllers/posts_controllers');
Router.post('/create',passport.checkAuthentication,postController.create);
module.exports=Router;
