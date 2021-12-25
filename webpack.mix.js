let mix = require('laravel-mix');
require('laravel-mix-ejs');

const srcDir = './';
const assetsDir = 'assets';
const distDir = '../';


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
  });


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