const User=require('../models/user');
module.exports.profile=function(req,res)
{
    res.render('users_profile',{
        title:"profile",
        user:req.user
    });
}
module.exports.signIn=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    res.render('user_sign_in',{
        title:'Sign-in'
    });
}
module.exports.signUp=function(req,res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
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
    return res.redirect('/');
}

module.exports.destroySession=function(req,res)
{
    req.logout();
    return res.redirect('/users/sign-in');
}