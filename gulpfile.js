require('./gulp/dev');
require('./gulp/scripts');
require('./gulp/styles');

const gulp = require('gulp');

gulp.task('default', () => {
  gulp.start('dev'); // gulp dev
});
