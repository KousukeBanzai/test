
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
  gulp.src([
    config.path.source + config.path.html + '**/*.html',
    config.path.source + config.path.html + '!/' + 'node_modules/**/*.html',
    config.path.source + config.path.html + '!/' + 'vendor/**/*.html',
    config.path.source + config.path.html + '!/' + 'hologram/**/*.html',
    config.path.source + config.path.html + '!/' + 'ejs/**/*.html',
    config.path.source + config.path.html + '!/' + 'assets/**/*.html'
    ],{base: 'html'})
    .pipe(gulp.dest(distDir))
}

gulp.task('html', function (done) {
  copyHtml(config.path.dist);
  done();
});