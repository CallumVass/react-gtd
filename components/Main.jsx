'use strict';

var React = require('react'),
    Reflux = require("reflux"),
    TodoStore = require("./TodoStore"),
    AddTodo = require("./AddTodo")
    ;

module.exports = React.createClass({

    displayName: 'Main',
    mixins: [Reflux.connect(TodoStore, "todos")],
    render: function () {

        var todos = this.state.todos.map(function (todo) {
            return <li>{todo.id} {todo.text}</li>;
        });

        return (
            <div className="row">
                <div className="col-sm-3">
                    <ul>{todos}</ul>
                </div>
                <div className="col-sm-9">
                    <AddTodo />
                </div>
            </div>
        );
    }
});