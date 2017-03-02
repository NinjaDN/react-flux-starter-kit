"use strict";

var React = require('react');

var TodoList = React.createClass({
	render: function () {
		var createTodoRow = function (todo) {
			return (
				<tr>
					<td>{todo.name}</td>
					<td>
						<input type="checkbox" value="false" />
					</td>
				</tr>
			);
		};
		return (
			<table className="table">
				{this.props.todos.map(createTodoRow, this)}
			</table>
		);
	}
});

module.exports = TodoList;