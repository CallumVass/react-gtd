'use strict';

var React = require('react'),
    ViewSelector = require("./ViewSelector"),
    SideNav = require("./SideNav")
    ;

module.exports = React.createClass({

    displayName: 'AppPage',

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-3">
                    <SideNav title="Agenda"
                        image="agenda"
                        route="agenda" />
                    <SideNav title="Inbox"
                        image="inbox"
                        route="inbox" />
                    <SideNav title="Projects"
                        image="projects"
                        route="projects" />
                    <SideNav title="Contexts" image="contexts" />
                    <SideNav title="Starred"
                        image="starred"
                        route="starred" />
                </div>
                <div className="col-sm-9">
                    <ViewSelector />
                </div>
            </div>
        );
    }
});