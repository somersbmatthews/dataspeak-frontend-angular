'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./node_modules/bootswatch/dist/darkly/_bootswatch.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./node_modules/bootswatch/dist/darkly/_bootswatch.scss', ['sass']);
});