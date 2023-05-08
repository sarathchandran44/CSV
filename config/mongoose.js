const mongoose = require('mongoose');





// mongoose.connect('mongodb://127.0.0.1:27017/csv-Uploads');
mongoose.connect("mongodb+srv://admin-tosif:Test123@cluster0.7rdhg14.mongodb.net/csvUploads",{useNewUrlParser:true});

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;
