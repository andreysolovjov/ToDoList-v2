const date = require ('../generateDate.js');

let toDoList = [];

exports.getWorkPage = (req, res) => {
    let day = date.getDate();
    let weekday = date.getWeekDay();
    console.log(day);
    res.render("index.ejs", {date: weekday, toDoItems: toDoList});
};

exports.postNewWorkItem = (req, res) =>{
    let newTask = req.body.newTask;
    toDoList.push(newTask);
    res.redirect("/work");
};