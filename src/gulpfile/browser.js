
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

  }else{
    browserSync({
      server: {
        baseDir: config.path.dist
      }
    });
  }
}


//========================================================================
// @ $bs-reload | オートリロード
//========================================================================

gulp.task('bs', function(done) {
  browserSync({
    server: {
      baseDir: config.path.dist
    }
  });
  done();
});

gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});