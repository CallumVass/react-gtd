'use strict';

var React = require('react'),
    Router = require("react-router")

    ;

module.exports = React.createClass({

    displayName: 'TodoItem',
    mixins: [Router.State],
    render: function () {
        return (
            <div className="row">
               Todo Item {this.getParams().todoId}
            </div>
        );
    }
});