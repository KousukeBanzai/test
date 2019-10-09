
//========================================================================
// @ クリーン
//========================================================================

var gulp        = require('gulp');
var del         = require("del");
var $           = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
                  pattern: ['gulp-*', 'gulp.*'],
                  replaceString: /\bgulp[\-.]/
});

// ------------------------------------------------------------

gulp.task('clean', function(done) {
  return del([
    config.path.dist + 'assets/',
    config.path.dist + 'docs/',
  ],{force:true});
  done();
});