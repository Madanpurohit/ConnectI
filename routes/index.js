const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controllers');
router.get('/',homeController.home);


router.use('/users',require('./users'));

router.use('/posts',require('./posts'));

//for any other routes, access from here 
//router.use('/routername',require('./routerfiles'));
console.log('router is loaded');
module.exports=router;