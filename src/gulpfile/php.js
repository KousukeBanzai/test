
//========================================================================
// @ cms.php | wordpress用テーマ作成時必要ファイル書き出し
//========================================================================

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task("php", function (done) {
  gulp.src(config.path.source + config.path.php + '/**/*')
    .pipe(gulp.dest(config.path.dist))
  done();
});