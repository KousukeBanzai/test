
//========================================================================
// @ $画像最適化
//========================================================================
var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// @ 関数化
// ------------------------------------------------------------

function imagemin(distDir){
  gulp.src(config.path.source + config.path.img +  "/**/*.jpg")
    .pipe($.imagemin())
    .pipe(gulp.dest(distDir));
  gulp.src(config.path.source + config.path.img +  "/**/*.png")
    .pipe($.imagemin())
    .pipe(gulp.dest(distDir));
}

gulp.task('imagemin', function(done){
  imagemin(config.path.dist + config.path.img);
  imagemin(config.path.dist + config.path.styleguile_dist + config.path.img);
  done();
});