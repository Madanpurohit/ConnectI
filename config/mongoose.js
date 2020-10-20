const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codial_devlopment');
const db=mongoose.connection;
db.on('error',console.error.bind(console,"error connection to mongodb"));
db.once('open',function(){
    console.log("Connected to database to :MongoDb");
});
module.exports=db;