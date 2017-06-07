"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const debug = require("gulp-debug");

gulp.task('clean', function (done) {
    gulp.src('./build/*', {read: false})
        .pipe(clean());
    done();
});

gulp.task('pug', function (done) {
    gulp.src('./src/index.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./build'));

    done();
});

gulp.task('sass', function (done) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'));

    done();
});

gulp.task('fonts', function (done) {
    gulp.src('./src/fonts/*.*')
        .pipe(gulp.dest('./build/fonts'));
    done();
});

gulp.task('build', gulp.series('clean', 'pug', gulp.parallel('sass', 'fonts')), function(done){
    done();
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});