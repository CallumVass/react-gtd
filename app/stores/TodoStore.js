"use strict";

var Reflux = require("reflux"),
    Actions = require("./../actions/Actions"),
    $ = require("jquery"),
    _ = require("lodash"),
    hostName = "http://cv-e6540",
    todos = [],
    host = hostName + ":1234"
    ;

module.exports = Reflux.createStore({
    init: function () {
        this.listenToMany(Actions);
        this.getTodos();

        setInterval(function () {
            this.getTodos()
        }.bind(this), 1000);
    },
    onDeleteTodo: function (id) {
        $.ajax({
            url: host + "/todos/" + id,
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

        $.post(host + "/todos", todo)
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
        return $.getJSON(host + "/todos")
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
        return _.find(todos, function(t) { return t.id == id; });
    }
});
