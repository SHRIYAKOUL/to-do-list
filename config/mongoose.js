// required mongoose library
const mongoose = require('mongoose');

// connect to the db
mongoose.connect('mongodb://127.0.0.1/todolist_db');

// acquired connection to db(to check if it is successful)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

// up and running then print the message
db.once('open',function(){
    console.log('Connected to Database::MongoDB Successfully');

});
module.exports = db;