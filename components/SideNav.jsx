"use strict";

var React = require("react");

module.exports = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
        image: React.PropTypes.oneOf(["agenda", "inbox", "contexts", "projects", "starred"])
    },

    render: function () {
        return <div>Side Nav</div>;
    }
});