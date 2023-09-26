const TaskList = require('../models/task.js');

// controller for home page
module.exports.home = function(req,res){
    // fetching data from database
  
    TaskList.find({})
    .then(function(task){
        return res.render('home',{
            title :"todolist",
            todo_list :task
        });
    })
    .catch(function(err){
        console.log('Error in fetching list from db');
        return;
    });


}
// controller for adding task

module.exports.add=function(req,res){
    TaskList.create(req.body)
        .then(function(task) {
            return res.redirect('/');
        })
        .catch(function(err) {
            console.log('Error in creating the list');
            return;
        });
};

// controller for deleting task

module.exports.delete = async function(req,res){
    // getting the id of selected boxes
    let id = req.query;
    console.log(id);

    // gives the length of the selected checkboxes
    let checkboxes = Object.keys(id).length;

    // iterating over each selected boxes
    for(let i=0; i<checkboxes; i++){
        // find the item in the database using id and delete it
        try {
            await TaskList.findByIdAndDelete(Object.keys(id)[i]);
        } catch(err) {
            console.log("Error in deleting the item");
            return;
        }
    }
    return res.redirect('back');
};