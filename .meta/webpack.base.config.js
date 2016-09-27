var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var fs = require('fs');
var node_modules_path = path.resolve(__dirname, "../node_modules");

var root = path.join(__dirname, "..");

function getThemeName() {
  function dir_exists(d) {
    try {
      return fs.statSync(d).isDirectory()
    } catch (er) {
      return false
    }
  }
  var theme;
  process.argv.forEach(function(val, index, array) {
    var re = new RegExp("^--theme=");
    if (!re.test(val)) {
      return false;
    }
    theme = val.replace('--theme=', '');
    if (!dir_exists(path.join(root, theme))) {
      console.log('\033[91m Error! Please, specify right theme to build.\033[0m For example: \r\n ' +
        '\033[92m npm run build -- --theme=dark \033[0m');
      process.exit(0);
    }
  });
  return theme;
}

var THEME = getThemeName() || 'classic';

console.log("Theme \"" + THEME + "\" is building");

var themeRoot = path.join(root, THEME);

module.exports = {
  __themeRoot: themeRoot,   // private var is used in dev config

  entry: './index.js',
  context: path.join(themeRoot, '/source/'),
  output: {
    path: path.join(themeRoot, 'dist'),
    filename: 'foundation.js'
  },
  resolve: {
    alias: {
      'foundation': path.join(__dirname, '../node_modules/foundation-sites')
    }
  },
  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, '../node_modules')
    ]
  },
  module: {
    loaders: [
      //{
      //  test: /\.(js6|es6)$/,
      //  loader: 'babel',
      //  // make sure to exclude 3rd party code in node_modules
      //  exclude: /node_modules/,
      //  query: {
      //    presets: ['es2015']
      //  }
      //},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass?precision=8&indentedSyntax")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader!sass?precision=8")
      },
      //{
      //  test: /\.css$/,
      //  loader: 'style-loader!css-loader?root=' + themeRoot + '&sourceMap!postcss-loader!sass-loader?sourceMap&sourceMapContents&precision=8&indentedSyntax'
      //},
      //{
      //  test: /\.sass$/,
      //  loader: 'style-loader!css-loader?root=' + themeRoot + '&sourceMap!postcss-loader!sass-loader?sourceMap&sourceMapContents&precision=8&indentedSyntax'
      //},
      //{
      //  test: /\.scss$/,
      //  loader: 'style-loader!css-loader?root=' + themeRoot + '&sourceMap!postcss-loader!sass-loader?sourceMap&sourceMapContents&precision=8&indentedSyntax'
      //},
      {
        // edit this for additional asset file types
        test: /\.(png|jpe?g|gif)$/i,
        loaders: ['url-loader?limit=30000!image?bypassOnDebug=false&optimizationLevel=7&interlaced=false&progressive=true'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }

    ]
  },
  postcss: [
    autoprefixer({browsers: ['last 2 version', 'ie >= 9', 'Opera 12']})
  ],
  plugins: [
    new ExtractTextPlugin("foundation.css")
  ],
  sassLoader: {
    includePaths: [
      path.resolve(node_modules_path, "foundation-sites/scss")
    ]
  }
};
