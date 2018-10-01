
//========================================================================
// @ html
//========================================================================

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

function copyHtml(distDir) {
  //html
  gulp.src([config.path.source + config.path.html + '**/*.html', config.path.source + config.path.html + '!/' + 'node_modules/**/*.html', config.path.source + config.path.html + '!/' + 'vendor/**/*.html', config.path.source + config.path.html + '!/' + 'hologram/**/*.html', , config.path.source + config.path.html + '!/' + 'ejs/**/*.html', config.path.source + config.path.html + '!/' + 'assets/**/*.html'],{ base: 'html' })
    .pipe(gulp.dest(distDir))
}

if(config.mode.static) {
  gulp.task('copy.html', function () {
    if (config.mode.html === true) {
      copyHtml(config.path.dist)
    }
  });
}else if((config.mode.cms && config.mode.cmstype === "acms")){
  gulp.task('copy.html', function () {
    copyHtml(config.path.cms + config.path.cms_dir + config.path.cms_theme_path + config.path.cms_theme_name + config.path.html)
  });
}