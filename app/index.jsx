"use strict";

var React = require("react"),
    Router = require("react-router"),
    DefaultRoute = Router.DefaultRoute,
    Link = Router.Link,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    Main = require("./components/Main"),
    TodoItem = require("./components/TodoItem");

var App = React.createClass({
    displayName: "App",
    render: function () {
        return (
            <div>
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="todoItem" path=":todoId" handler={TodoItem} />
        <DefaultRoute handler={Main} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById("app"));
});