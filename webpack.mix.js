let mix = require('laravel-mix');

const srcDir = './';
const assetsDir = 'assets';
const distDir = '../';

mix.js(srcDir + assetsDir + '/js/app.js',
  './' + assetsDir + '/js/').vue()
   .setPublicPath(distDir);

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

mix.browserSync({
  files: ["./*", "./**/*", "./**/**/*", "./**/**/**/*"],
  //server: '../../../../',
  browser: "google chrome",
  proxy: {
    target: "http://localhost/",
  },
});