//========================================================================
// @ wp.assets | wordpress用テーマ作成時必要ファイル書き出し
//========================================================================

var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

gulp.task('wp.assets', function (done) {
  // wordpress用 style.css 書き出し

  gulp.src(config.path.source + config.path.wp_assets + 'wp_style.scss')
    .pipe($.sass())
    .pipe($.rename('style.css'))
    .pipe(gulp.dest(config.path.dist))

  gulp.src(config.path.source + config.path.wp_assets + '**/*.scss' || config.path.source + config.path.wp_assets + '!wp_style.scss')
    .pipe($.sass())
    .pipe(gulp.dest(config.path.dist))

  gulp.src(config.path.source + config.path.wp_assets + '**/*.png')
    .pipe(gulp.dest(config.path.dist))

  done();
});