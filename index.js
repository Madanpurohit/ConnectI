const express=require('express');
const app=express();
const port=8000;
//setup routes 
app.use('/',require('./routes'));

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