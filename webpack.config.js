// production モード以外の場合、変数 enabledSourceMap は true
const enabledSourceMap =  process.env.NODE_ENV !== 'production';

const PATH = require('path');
const webpack = require('webpack');

//BrowserSyncPlugin の読み込み
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './assets/js/index.js',
  output: {
    path: PATH.resolve(__dirname, '../assets/js/'),
    publicPath: PATH.resolve(__dirname, '../'),
    filename: "[name].js"
  },
  devServer: {
    static: PATH.resolve(__dirname, '../'),
    open: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
    }
  },
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2021 を ES5 に変換
                "@babel/preset-env",
              ],
            },
          },
        ],
      },
      {
        // 対象となるファイルの拡張子(scss)
        test: /\.scss/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
              // Sass+PostCSSの場合は2を指定
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                  //PostCSS Sort Media Queries
                  // mobile-first：モバイルファーストでまとめる（デフォルト）
                  // desktop-first
                  ['postcss-sort-media-queries', { sort: 'desktop-first' }],
                ],
              },
            },
          },
          
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            // dart-sass を優先
            options: {
              // dart-sass を優先
              implementation: require('sass'),
              sassOptions: {
                // fibers を使わない場合は以下で false を指定
                fiber: require('fibers'),
              },
              // ソースマップを有効に
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
    
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: '../'}
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/  //正規表現で指定
  },
};

