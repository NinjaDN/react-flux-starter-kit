"use strict";

var todos = require('./todoData').todos;
var _ = require('lodash');

var _generateId = function() {
	return todos.length + 1;
};

var _convertToJson = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var TodoApi = {
	getAllTodos: function() {
		return _convertToJson(todos); 
	},

	getTodoById: function(id) {
		var todo = _.find(todos, {id: id});
		return _convertToJson(todo);
	},
	
	saveTodo: function(todo) {
		if (todo.id) {
			var existingTodo = _.indexOf(todos, _.find(todos, {id: todo.id})); 
			todos.splice(existingTodo, 1, todo);
		} else {
			todo.id = _generateId();
			todos.push(_convertToJson(todo));
		}

		return todo;
	},

	deleteTodo: function(id) {
		_.remove(todos, { id: id});
	}
};

module.exports = TodoApi;