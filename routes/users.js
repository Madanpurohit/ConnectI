const express=require('express');
const { route } = require('.');
const passport=require('passport');
const Router=express.Router();
const usersControllers=require('../controllers/users_controllers');
Router.get('/profile',passport.checkAuthentication,usersControllers.profile);
Router.get('/sign-in',usersControllers.signIn);
Router.get('/sign-up',usersControllers.signUp);
Router.post('/create',usersControllers.create);
Router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'./users/sign-in'}
),usersControllers.createSession);
Router.use('/posts',require('./post'));
module.exports=Router;