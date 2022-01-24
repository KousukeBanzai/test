require('laravel-mix-ejs');
require('laravel-mix-purgecss');

const mix = require('laravel-mix');
const path= require('path');
const glob = require('glob');
const srcDir = './';
const assetsDir = 'assets';
const distDir = '../';
const defaultConfig = {
  content: [
    "./**/*.html",
    "./assets/**/*.js",
    "./assets/**/*.vue",
  ],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  safelist: { standard: [/-active$/, /-enter$/, /-leave-to$/, /show$/] },
}

mix.setPublicPath(distDir);
mix.webpackConfig({ devtool: "source-map" }); // 追加

// js
// ------------------------------------------------------------

// JavaScript Bundling
// + Vue Support
glob.sync(srcDir + assetsDir + '/js/**/*.js').map(function(file){
  mix.js(file, './' + assetsDir + '/js/').vue()
});

// Autoloading
mix.autoload({
  jquery: ['$', 'window.jQuery']
});

// Vender
mix
  .extract([
  'vue',
  'jquery']);

// Scss
// ------------------------------------------------------------

// Sass Preprocessing
mix
  .sass(srcDir + assetsDir + '/scss/app.scss',
  './' + assetsDir + '/css/',
  {
    implementation: require("sass"), // Prefer `dart-sass`
    sourceMap: true,
    // sassOptions: {
    //   outputStyle: "compressed",
    // },
  })
  .options({
    processCssUrls: false, // false でurl()の変換をさせない
    autoprefixer: {
      options: {
        grid: true, // grid: trueでIE11でのgrid使用できるように
      }
    },
    // 下記を追加
    postCss: [
      require('css-mqpacker')(),
      require('css-declaration-sorter')({
        order: 'alphabetical' // smacss, concentric-css
      }),
      require('postcss-custom-properties')({
        preserve: false
      })
    ]
  })
  // purgeCss：未使用CSSを削除
  .purgeCss(
    {
      // enabled: true,
      extend: {
        content: [
          path.join(__dirname, '../**/*.html'),
          path.join(__dirname, '../**/*.php')
        ],
        //https://purgecss.com/safelisting.html#specific-selectors
        safelist:{
          standard: [/^is-/],
          deep: [],
          greedy: []
        }
      },
    }
  )
  .sourceMaps();

// Ejs
// ------------------------------------------------------------


// Laravel Mix extension to compile EJS templates.
// mix.ejs(
//   './views',
//   '../',
//   {
//     foo: ''
//   },
//   {
//     base: './views',
//     ext: '.html',
//     partials: './views/partials'
//   }
// )

// Browsersync
// ------------------------------------------------------------

mix
  .browserSync({
  files: [
    "../*",
    "../**/*",
    "./*",
    "./**/*",
    "./**/**/*",
    "./**/**/**/*"],
  server: {
    baseDir: "../",
    directory: true
  },
  port: 8080
});