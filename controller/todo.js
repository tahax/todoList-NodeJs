const Todo = require('../model/todo');

exports.todoController = (req, res, next) => {
    const todo = new Todo();
    todo.showArray((lastArray) => {
        res.render('index',{
            pageTitle : "taha kasramehr",
            lastArray
        });
    })
}