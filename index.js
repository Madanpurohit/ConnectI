const express=require('express');
const app=express();
const port=8000;
app.listen(port,function(err){
    if(err)
    {
        console.log("serrver is not running");
        return;
    }
    console.log("server is running on port ",port);
})