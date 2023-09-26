
// required express module
const express = require('express');
const path=require('path');
// selecting the port
const port = 8000;

// required db
const db=require('./config/mongoose');

// const TaskList = require('./models/task');

const app = express();


// set up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

// used static files
app.use(express.static('./assets'));
// middleware to read url request
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes'))

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:${err}');
    }

    console.log(`Server is running on port:${port}`);
});