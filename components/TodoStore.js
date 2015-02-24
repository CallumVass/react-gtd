"use strict";

var Reflux = require("reflux"),
    Actions = require("./Actions"),
    $ = require("jquery")
    ;

var todos = [];

module.exports = Reflux.createStore({
    init: function () {
        this.listenTo(Actions.addTodo, this.onAddTodo);
        this.listenTo(Actions.deleteTodo, this.onDeleteTodo);
    },
    onDeleteTodo: function (id) {
        $.ajax({
            url: "http://localhost:1234/todos/" + id,
            type: "DELETE"
        })
            .fail(function (er) {
                console.log(er);
            })
            .always(function () {
                this.getTodos();
            }.bind(this));
    },
    onAddTodo: function (text) {

        var todo = {
            text: text
        };

        $.post("http://localhost:1234/todos", todo)
            .done(function (data) {
                todos.push(data);
            }.bind(this))
            .fail(function (er) {
                console.log(er);
            })
            .always(function () {
                this.trigger(todos);
            }.bind(this));
    },
    getTodos: function () {
        return $.getJSON("http://localhost:1234/todos")
            .done(function (data) {
                todos = data;
            })
            .fail(function (er) {
                console.log(er);
            })
            .always(function () {
                this.trigger(todos);
            }.bind(this));
    },
    getTodo: function (id) {
        return todos[id - 1];
    }
});
