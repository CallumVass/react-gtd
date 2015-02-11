module.exports = {
    entry: "./index.jsx",
    output: {
        filename: "bundle.js",
        publicPath: "http://localhost:9090/assets"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "jsx-loader?intertPragma=React.DOM"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};