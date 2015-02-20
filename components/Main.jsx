'use strict';

var React = require('react'),
    Reflux = require("reflux"),
    Link = require("react-router").Link,
    TodoStore = require("./TodoStore"),
    AddTodo = require("./AddTodo"),
    SideMenu = require("./SideMenu")
    ;

module.exports = React.createClass({

    displayName: 'Main',
    mixins: [Reflux.connect(TodoStore, "todos")],
    getInitialState: function(){
        return {
            todos: TodoStore.getTodos()
        }
    },
    render: function () {

        var todos = this.state.todos.map(function (todo) {
            return <li key={todo.id}><Link to="todoItem" params={{todoId: todo.id}}>{todo.id} {todo.text}</Link></li>;
        });

        return (
            <div className="row">
                <div className="col-sm-3">
                    <ul>{todos}</ul>
                </div>
                <div className="col-sm-6">
                    <AddTodo />
                </div>
                <div className="col-sm-3">
                    <SideMenu count={this.state.todos.length} />
                </div>
            </div>
        );
    }
});