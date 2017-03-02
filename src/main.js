$ = jQuery = require('jquery');

var App = console.log('Hello world from Browserify');

var React = require('react');
var TodoPage = require('./components/todo/todoPage');

React.render(<TodoPage />, document.getElementById('app'));