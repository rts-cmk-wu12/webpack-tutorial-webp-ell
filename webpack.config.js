module.exports = {
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: ["css-loader", "sass-loader"],
            },
        ],
    },
}