// @ 設定ファイル読み込み
// ------------------------------------------------------------
var conf = require('./config');
var requireDir = require('require-dir');
var dir = requireDir('./gulpfile');

//========================================================================
// @ require
//========================================================================

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var $           = require('gulp-load-plugins')({
                    pattern: ['gulp-*', 'gulp.*'],
                    replaceString: /\bgulp[\-.]/
                  });

//========================================================================
// @ ローカルサーバー起動 監視タスクON
//========================================================================

gulp.task('watch', function(){
  gulp.watch(config.path.source + config.path.sass + '**/*.scss').on('change', gulp.series('scss','bs-reload'));
  gulp.watch(config.path.source + config.path.js + '**/*.js').on('change', gulp.series('js','bs-reload'));
  gulp.watch(config.path.source + config.path.img + '**/*.jpg').on('change', gulp.series('imagemin','bs-reload'));
  gulp.watch(config.path.source + config.path.img + '**/*.png').on('change', gulp.series('imagemin','bs-reload'));
  gulp.watch(config.path.source + config.path.js + 'lib/**/*').on('change', gulp.series('copy.assets','bs-reload'));
  gulp.watch(config.path.source + config.path.svg + '**/*').on('change', gulp.series('copy.assets','bs-reload'));
  gulp.watch(config.path.source + config.path.file + '**/*').on('change', gulp.series('copy.assets','bs-reload'));
});

gulp.task('serve',gulp.series(
  'bs',
  gulp.parallel('watch')
));

//========================================================================
// @ 全タスク実行
//========================================================================

gulp.task('build',gulp.series(
  'clean',
  gulp.parallel('scss','js','copy.assets', 'imagemin')
));
