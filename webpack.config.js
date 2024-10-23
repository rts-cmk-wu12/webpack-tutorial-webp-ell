module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["css-loader", "sass-loader"],
            },
        ],
    },
}