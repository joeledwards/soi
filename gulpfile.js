var gulp = require("gulp");
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');

gulp.task('default', ['lint', 'spec'], function() {
    console.log("Done.");
    return null;
});

gulp.task('lint', function() {
    return gulp.src('./js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('spec', function() {
    return gulp.src('./js/spec/*.js')
        .pipe(jasmine());
});

