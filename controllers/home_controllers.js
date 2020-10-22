const Post=require('../models/post');
module.exports.home=function(req,res)
{
    // console.log(req.cookies);
    // res.cookie('user-name',25)
    Post.find({},function(err,posts){
        return res.render('home',{
            title:"codial | home",
            posts:posts
        });
    })
}