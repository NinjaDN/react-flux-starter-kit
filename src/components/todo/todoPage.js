"use strict";

var React = require('react');
var TodoForm = require('./todoForm');
var TodoList = require('./todoList');
var TodoApi = require('../../api/todoApi');

var TodoPage = React.createClass({
	getInitialState: function () {
		return {
			name: '',
			todos: TodoApi.getAllTodos()
		};
	},
	setTodoState: function (event) {
		this.setState({ name: event.target.value });
	},
	createTodo: function () {
		TodoApi.saveTodo({
			name: this.state.name
		});
		this.setState({ name: '' });
		this.setState({ todos: TodoApi.getAllTodos() });
	},
	// deleteTodo: function (id) {
	// 	TodoApi.deleteTodo(id);
	// 	this.setState({ todos: TodoApi.getAllTodos() });
	// },
	render: function () {
		return (
			<div className="container-fluid">
				<h1>Todo</h1>
				<TodoForm name={this.state.name} onType={this.setTodoState} onSave={this.createTodo}/>
				<br/>
				<TodoList todos={this.state.todos} />
			</div>
		);
	}
});

module.exports = TodoPage;