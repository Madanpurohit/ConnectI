const User=require('../models/user');
const { use } = require('../routes');
module.exports.profile=function(req,res)
{
    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id,function(err,user){
            if(err){console.log("error to finding user");return;}
            if(user)
            {
                return res.render('users_profile',{
                    title:'profile',
                    name:user.name,
                    email:user.email
                });
            }
            return res.redirect('/users/sign-in');
        })
    }
    else return res.redirect('/users/sign-in');
}
module.exports.signIn=function(req,res)
{
    res.render('user_sign_in',{
        title:'Sign-in'
    });
}
module.exports.signUp=function(req,res)
{
    res.render('user_sign_up',{
        title:'Sign-up'
    });
}

//create account 
module.exports.create=function(req,res)
{
    if(req.body.password!=req.body.confirm_password) return res.redirect('back');
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user in signig up');return;}
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating user while sign up');return;}
                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('/users/sign-in');
        }
    })
}
//sing in
module.exports.createSession=function(req,res)
{
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in sign-in');return;}
        if(user)
        {
            if(user.password!=req.body.password) {return res.redirect('back');}
            res.cookie('user_id',user.id);
            res.redirect('/users/profile');
        } 
        else {return res.redirect('back');}
    }); 
}