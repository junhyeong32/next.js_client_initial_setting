const withSass = require("@zeit/next-sass");
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => { };
}

module.exports = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    ...withLess(
        withSass({
            cssModules: true,
            lessLoaderOptions: {
                javascriptEnabled: true,
            },
        })
    )
});
