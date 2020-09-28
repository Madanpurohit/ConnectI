const express=require('express');
const app=express();
const port=8000;
const expressLayout=require('express-ejs-layouts');
app.use(expressLayout);
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
        console.log("serrver is not running");
        return;
    }
    console.log("server is running on port ",port);
})