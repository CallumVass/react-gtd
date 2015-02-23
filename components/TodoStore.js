"use strict";

var Reflux = require("reflux"),
    Actions = require("./Actions"),
    $ = require("jquery")
    ;

var todos = [];

module.exports = Reflux.createStore({
    init: function () {
        this.listenTo(Actions.addTodo, this.onAddTodo);
        this.listenTo(Actions.editTodo, this.onEditTodo);
    },
    onEditTodo: function(id) {

    },
    onAddTodo: function (text) {

        var todo = {
            id: todos.length + 1,
            text: text
        };

        $.post("http://localhost:1234/todos", todo)
            .done(function (data) {
                todos.push(todo);
            }.bind(this))
            .fail(function (er) {
                console.log(er);
            })
            .always(function () {
                this.trigger(todos);
            }.bind(this));
    },
    getTodos: function () {
        return todos;
    },
    getTodo: function(id) {
        return todos[id - 1];
    }
});
