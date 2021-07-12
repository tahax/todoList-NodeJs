const express = require("express");

const router = express.Router();

const adminController = require("../controller/admin");

router.post("/add-todo", adminController.addTodo);

router.get("/delete-todo/:id", adminController.deleteTodo);
router.get("/complited-todo/:id", adminController.todoCompleted);

module.exports = router;
