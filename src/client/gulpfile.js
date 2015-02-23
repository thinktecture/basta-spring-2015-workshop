var gulp = require('gulp'),
    del = require('del'),
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

gulp.task("clean_cordova", function(cb){
    del("cordova/www", cb);
});

gulp.task("cordova", ["clean_cordova"], function () {
    gulp.src("app/**/*.html")
        .pipe(gulp.dest("cordova/www/app"));
    gulp.src("bower_components/**")
        .pipe(gulp.dest("cordova/www/bower_components"));
    gulp.src("build/**")
        .pipe(gulp.dest("cordova/www/build"));
    gulp.src("index.html")
        .pipe(gulp.dest("cordova/www"));
});

gulp.task("default", ["scripts", "watch"], function () {
});
