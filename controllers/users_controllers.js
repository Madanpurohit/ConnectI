module.exports.profile=function(req,res)
{
    res.render('users_profile',{
        title:"profile"
    });
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
    //to do leter
}
//sing in
module.exports.createSession=function(req,res)
{
    // to do leter
}