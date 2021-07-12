const express = require('express');
const { Module } = require('module');
const router = express.Router();

const todoControll = require('../controller/todo.js');

router.get('/', todoControll.todoController)

module.exports = router;
