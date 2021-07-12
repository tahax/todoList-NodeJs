const Todo = require("../model/todo.js");

exports.addTodo = (req, res, next) => {
  if (!req.body.todo) return res.redirect("/");
  const todo = new Todo(Math.floor(Math.random() * 1000), req.body.todo);
  todo.save((err) => {
    if (!err) res.redirect("/");
    else console.log(err);
  });
};

exports.deleteTodo = (req, res, next) => {
  const todo = new Todo();
  todo.deleteTodo(req.params.id, (err) => {
    if (!err) res.redirect("/");
    console.log(err);
  });
};

exports.todoCompleted = (req, res, next) => {
    Todo.completedTodo(req.params.id, (err) => {
      if (!err) res.redirect("/");
      console.log(err);
    });
}