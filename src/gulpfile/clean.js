
//========================================================================
// @ クリーン | ディレクトリ削除
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

if(config.mode.static){
  gulp.task('clean', function(done) {
    return del([config.path.dist],{force:true});
    done();
  });
}else if(config.mode.cms){
  gulp.task('clean', function(done) {
    return del([config.path.cms + config.path.cms_dir + config.path.cms_theme_path + config.path.cms_theme_name],{force:true});
    done();
  });
}