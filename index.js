const express=require('express');
const app=express();
const port=8000;
const cookieParser=require('cookie-parser');
const expressLayout=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const MongoStore=require('connect-mongo')(session);

const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

const sassMiddleware=require('node-sass-middleware');


app.use(expressLayout);
app.use(express.urlencoded());

app.use(cookieParser());
app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}));

//for authintaction using passport
//mongostore is use to store the session cookie in the db
app.use(session({
    name:'codial',
    //to do letter in secret while deployment
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)

    },
    store:new MongoStore({
        mongooseConnection:db,
        autoRemove:'disabled'
    },
    function(err){
        console.log(err||'mongoStore is ok');
    }
    )
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(passport.setAuthenticatedUser)
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