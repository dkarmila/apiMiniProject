let mongoose = require('mongoose');

let database ={
    user : 'dbelektronik',
    pass : 'miniprojek',
    url : 'ds229835.mlab.com:29835',
    name : 'dbelektronik'
}
mongoose.connect("mongodb://"+database.user+":"+database.pass+"@"+database.url+"/"+database.name);

//mongoose.connect('mongodb://localhost:27017/DBElektronik');

db=mongoose.connection;
db.on('error', console.log.bind(console, 'Connection Error..'));
db.once('open', function(){
    console.log("Connection to dbElektronik is open ..");
})