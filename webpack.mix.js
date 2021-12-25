let mix = require('laravel-mix');

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