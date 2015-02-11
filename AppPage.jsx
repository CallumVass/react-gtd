'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName: 'AppPage',

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-3">
                    SIDEBAR
                </div>
                <div className="col-sm-9">
                    MAIN
                </div>
            </div>
        );
    }
});