const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('dev', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
    port: 8082
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });

  watch(['./app/assets/css/**/*.css', '!./app/assets/css/styles.css'], () => {
    gulp.start('injectCss');
  });

  watch('./app/assets/js/**/*.js', () => {
    gulp.start('refreshScripts');
  });
});

gulp.task('injectCss', ['styles'], () =>
  gulp.src('./app/assets/css/styles.css')
    .pipe(browserSync.stream())
);

gulp.task('refreshScripts', ['scripts'], () => {
  browserSync.reload();
});
