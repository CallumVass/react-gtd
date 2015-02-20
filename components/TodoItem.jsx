'use strict';

var React = require('react'),
    Reflux = require("reflux"),
    Router = require("react-router"),
    Actions = require("./Actions"),
    TodoStore = require("./TodoStore")
    ;

module.exports = React.createClass({

    displayName: 'TodoItem',
    mixins: [Router.State, Reflux.connect(TodoStore, "todo")],
    componentWillMount: function () {
        this.setState({
            todo: Actions.getTodo(this.getParams().todoId)
        });
    },
    getInitialState: function () {
        return {
            todo: {}
        }
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <h2>{this.state.todo}</h2>

                    <button onClick={this.deleteTodo} className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    },
    deleteTodo: function () {
        // delete here
        console.log("deleted");
    }
});