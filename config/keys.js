//module.exports = {
   // MongoURI: 'mongodb+srv://ahasib0987:Z2wVfVauIi99Kxhr@cluster0.zybadjx.mongodb.net/?retryWrites=true&w=majority'    
//}
const mongoose=require('mongoose');
//const env = require('./environment');

mongoose.connect(`mongodb://localhost:27017/habitdb`);

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
      console.log("Connected to the database::MONGO_DB");

});

module.exports=db;