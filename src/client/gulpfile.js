var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    annotate = require('gulp-ng-annotate');

gulp.task("scripts", function () {
    return gulp.src('app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(annotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build'));
});

gulp.task("watch", function () {
    gulp.watch('app/**/*.js', ["scripts"]);
});

gulp.task("default", ["scripts", "watch"], function () {
});
