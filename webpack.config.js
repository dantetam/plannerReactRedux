const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
        template: "./src/testpoint.html",
        filename: "./testpoint.html"
    })
  ],
  devServer: {
    proxy: {
      '/getproxy': {
        bypass: (req, res) => {
          res.send("This is a proxy GET request.");
        }
      },
      '/postproxy': {
        bypass: (req, res) => {
            if(req.method == 'POST') {
                res.send("This is a proxy POST request.")
            }
        }  
      }
    }
  }
};
