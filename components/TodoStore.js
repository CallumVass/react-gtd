"use strict";

var Reflux = require("reflux"),
    Actions = require("./Actions")
    ;

module.exports = Reflux.createStore({
    init: function () {
        this.listenTo(Actions.addTodo, this.onAddTodo);
        this.todos = [];
    },
    onAddTodo: function (text) {
        this.todos.push({
            id: this.todos.length + 1,
            text: text
        });

        this.trigger(this.todos);
    },
    getInitialState: function () {

        if (this.todos.length < 1) {
            this.todos = [{
                id: 1,
                text: "Learn Reflux and React"
            }];
        }

        return this.todos;
    }
});
