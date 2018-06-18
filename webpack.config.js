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
      '/proxy': {
        bypass: (req, res) => {
             if (req.method === 'GET' && req.url.includes("/getproxy")) {
                 res.send({data: "This is a proxy GET request."});
             }
             else if (req.method === 'POST' && req.url.includes("/postproxy")) {
                 res.send({data: "This is a proxy POST request."});
             }
        }
      }
      /*
      ,
      '/postproxy': {
        bypass: (req, res) => {
            if(req.method == 'POST') {
                res.send("This is a proxy POST request.")
            }
        }  
      }
      */
    }
  }
};
