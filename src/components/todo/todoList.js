"use strict";

var React = require('react');

var TodoList = React.createClass({
	render: function () {
		var createTodoRow = function (todo) {
			return (
				<tr>
					<td>{todo.name}</td>
					<td>
						<input type="checkbox" value="false" id={todo.id} onClick={this.props.onRemove} />
					</td>
				</tr>
			);
		};
		return (
			<table className="table">
				<tbody>
					{this.props.todos.map(createTodoRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;