'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName: 'SideMenu',
    propTypes: {
        count: React.PropTypes.number.isRequired
    },
    getDefaultProps: function(){
        return {
            count: 0
        }
    },
    render: function () {

        return (
            <div>
                {this.props.count}
            </div>
        );
    }
});