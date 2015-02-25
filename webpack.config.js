module.exports = {
    entry: "./components/index.jsx",
    output: {
        filename: "bundle.js",
        publicPath: "http://localhost:9090/assets"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "jsx-loader?intertPragma=React.DOM"
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};