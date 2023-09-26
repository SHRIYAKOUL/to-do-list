const mongoose = require('mongoose');

// define schema of the db
const listSchema = new mongoose.Schema({
    // for title of the task
    title:{
        type:String,
        required:true
    },
    // for description of the task
    desc:{
        type:String,
        required:true
    },
    // for category of the task
    category:{
        type:String,
        required:true
    },
    // for due date of the task
    date:{
        type:String,
        required:true
    },
    // for priority of the task
    prior:{
        type:String,
        required:true
    }
});

const TaskList = mongoose.model('TaskList',listSchema);
module.exports = TaskList;