'use strict';

var React = require('react'),
    Reflux = require("reflux"),
    Actions = require("./Actions")
    ;

module.exports = React.createClass({

    displayName: 'AddTodo',
    render: function () {
        return (
            <form onSubmit={this.handleSubmit} className="form-inline">
                <div className="form-group">
                    <label className="sr-only" for="todo">Todo</label>
                    <div className="input-group">
                        <input type="text" ref="todoText" className="form-control" id="todo" placeholder="Add Todo" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    },
    handleSubmit: function (event) {
        event.preventDefault();
        Actions.addTodo(this.refs.todoText.getDOMNode().value);
        this.refs.todoText.getDOMNode().value = "";
    }
});