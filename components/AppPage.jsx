'use strict';

var React = require('react'),
    ViewSelector = require("./ViewSelector")
    ;

module.exports = React.createClass({

    displayName: 'AppPage',

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <div>Hi</div>
                </div>
                <div className="col-sm-9">
                    <ViewSelector />
                </div>
            </div>
        );
    }
});