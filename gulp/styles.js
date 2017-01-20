const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

gulp.task('styles', () =>
  gulp.src('./app/assets/css/main.css')
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-simple-vars'),
      require('postcss-nested'),
      require('postcss-hexrgba'),
      require('autoprefixer')
    ]))
    .on('error', function (err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./app/assets/css/'))
);
