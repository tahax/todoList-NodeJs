const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path.js");

const filePath = path.join(rootDir, "data", "todo.json");

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      const lastArray = JSON.parse(data);
      lastArray.push(this);
      fs.writeFile(filePath, JSON.stringify(lastArray), (err) => {
        if (err) callback(err);
        callback(null);
      });
    });
  }

  showArray(callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      const lastArray = JSON.parse(data);
      callback(lastArray);
    });
  }

  deleteTodo(id, callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      const lastArray = JSON.parse(data);
      const filteredArray = lastArray.filter((t) => t.id != id);
      fs.writeFile(filePath, JSON.stringify(filteredArray), (err) => {
        callback(err);
      });
    });
  }

  static completedTodo(id, callback) {
    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      const lastArray = JSON.parse(data);
      const todoIndex = lastArray.findIndex((t) => t.id == id);
      const todo = lastArray[todoIndex];
      todo.completed = true;
      lastArray[todoIndex] = todo;
      fs.writeFile(filePath, JSON.stringify(lastArray), (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;
