var gulp = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');

gulp.task('default', ['lint', 'watch']);

gulp.task('watch', function() {
  gulp.watch('./scripts/songs.js', ['lint']);
});


gulp.task('lint', function() {
  return gulp.src('./scripts/songs.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});