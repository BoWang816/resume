/**
 * next.config.js
 * @author wangbo
 * @since 2021/1/14
 */

const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
module.exports = withLess(withCss({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    }
}));
