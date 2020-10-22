const express=require('express');
const Router=express.Router();
const postController=require('../controllers/posts_controllers');
Router.post('/create',postController.create);
module.exports=Router;
