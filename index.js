const express=require('express');
const app=express();
const port=8000;
const cookieParser=require('cookie-parser');
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


app.use(expressLayout);
app.use(express.urlencoded());

app.use(cookieParser());

//for authintaction using passport
app.use(session({
    name:'codial',
    //to do letter in secret while deployment
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)

    }
}));
app.use(passport.initialize());
app.use(passport.session()); 
//setup routes 
app.use('/',require('./routes'));
app.use(express.static('./assets'));

//extract style and script form subpages to layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//setup view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err)
    {
        console.log("server is not running");
        return;
    }
    console.log("server is running on port ",port);
})