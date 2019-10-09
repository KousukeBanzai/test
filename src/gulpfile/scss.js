
//========================================================================
// scss コンパイルタスク
//========================================================================

var gulp        = require('gulp');
var $           = require('gulp-load-plugins')({
                  pattern: ['gulp-*', 'gulp.*'],
                  replaceString: /\bgulp[\-.]/
});

var browsers = [
    '> 3%'
];

// ------------------------------
// @ Sassコンパイルタスクを関数化
// ------------------------------

function scssCompile(distDir) {
   gulp.src(config.path.source + config.path.sass + '/**/*.scss')
      .pipe($.plumber({
        errorHandler: $.notify.onError("Error: <%= error.message %>")
      }))
      .pipe($.sourcemaps.init())
      .pipe($.sass())
      .pipe($.postcss([
        // require('doiuse')({browsers: browsers}),
        // todo:ignoreする https://liginc.co.jp/206518
        require('autoprefixer')({browsers: browsers}),
        require('css-mqpacker')
      ]))
      // ▼ 出力CSSを難読化させる場合はコメントアウトを外す
      .pipe($.csso())
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(distDir))
}

gulp.task('scss', function(done){
  scssCompile(config.path.dist + config.path.css);
  scssCompile(config.path.dist + config.path.styleguile_dist + config.path.css);
  done();
});

