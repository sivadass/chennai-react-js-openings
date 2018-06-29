const path = require("path");

module.exports = {
  entry: "./client-src/index.js",
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "bundle.js"
  }
};
