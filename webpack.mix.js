const mix = require('laravel-mix');
const srcDir = './';
const assetsDir = 'assets';
const distDir = '../';
const path= require('path');

const defaultConfig = {
  content: [
    "./**/*.html",
    "./assets/**/*.js",
    "./assets/**/*.vue",
  ],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  safelist: { standard: [/-active$/, /-enter$/, /-leave-to$/, /show$/] },
}

require('laravel-mix-ejs');
require('laravel-mix-purgecss');

// js
// ------------------------------------------------------------

// Autoloading
mix.autoload({
  jquery: ['$', 'window.jQuery']
});

// JavaScript Bundling
// + Vue Support
mix.js(srcDir + assetsDir + '/js/app.js',
  './' + assetsDir + '/js/').vue()
   .setPublicPath(distDir);

mix.extract([
  'vue',
  'jquery'
]);

// Scss
// ------------------------------------------------------------

// Sass Preprocessing
mix.sass(srcDir + assetsDir + '/scss/app.scss',
  './' + assetsDir + '/css/',
  {
    // Prefer `dart-sass`
    implementation: require("sass"),
    sourceMap: true,
    // sassOptions: {
    //   outputStyle: "compressed",
    // },
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
  );

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

mix.browserSync({
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