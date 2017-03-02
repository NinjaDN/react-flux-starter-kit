"use strict";

var React = require('react');

var TodoForm = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div class="col-lg-6">
					<div class="input-group">
						<input type="text" placeholder="Todo..." value={this.props.name} onChange={this.props.onType} ></input>
						<span class="input-group-btn">
							<button class="btn btn-default" type="button" onClick={this.props.onSave} >Add</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TodoForm;