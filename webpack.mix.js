let mix = require('laravel-mix');

const srcDir = './';
const assetsDir = 'assets';
const distDir = '../';

mix.js(srcDir + assetsDir + '/js/app.js', './' + assetsDir + '/js/')
   .setPublicPath(distDir);
