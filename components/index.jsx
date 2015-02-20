"use strict";

var React = require("react"),
    Router = require("react-router"),
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    Inbox = require("./Inbox"),
    Calender = require("./Calender"),
    Dashboard = require("./Dashboard");

var App = React.createClass({
    displayName: "App",
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li>
                            <Link to="app">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="inbox">Inbox</Link>
                        </li>
                        <li>
                            <Link to="calender">Calender</Link>
                        </li>
                    </ul>
                    Logged in as Callum
                </header>

                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={Inbox} />
        <Route name="calender" handler={Calender} />
        <DefaultRoute handler={Dashboard} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});