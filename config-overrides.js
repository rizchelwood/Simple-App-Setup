const { override, addBabelPlugins, addBabelPresets, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
    addBabelPlugins("emotion"),
    addBabelPresets("@emotion/babel-preset-css-prop"),
    addWebpackAlias({
        ["@modules"]: path.resolve(__dirname, "src/modules")
      }),
);
