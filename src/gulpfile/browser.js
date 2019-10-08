
//========================================================================
// @ $browser-sync | ローカルサーバー起動
//========================================================================

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var $           = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// @ 関数化
// ------------------------------

function bsFunction(distDir,proxy) {
  if(proxy){
    browserSync({
      server: {
        baseDir: config.path.dist
      }
    });
  }else{
    browserSync({
      server: {
        baseDir: config.path.dist
      }
    });
  }
}

if(config.mode.static){
  gulp.task('bs', function(done) {
    bsFunction(config.path.dist,config.proxy);
    done();
  });
}else if(config.mode.cms){
  gulp.task('bs', function(done) {
    bsFunction(config.path.dist,config.proxy);
    done();
  });
}

//========================================================================
// @ $bs-reload | オートリロード
//========================================================================

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});