"use strict";

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');
var tsTestProject = ts.createProject('tsconfig.json');

gulp.task('tsc', function() {
  return gulp.src(['./source/ts/**/**.ts'])
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./temp/source/js'));
});

gulp.task('tsc-tests', function() {
  return gulp.src(['./test/ts/**/**.ts'])
    .pipe(ts(tsTestProject))
    .js.pipe(gulp.dest('./temp/test'));
});

gulp.task('lint', function() {
  return gulp.src(['./source/ts/**/**.ts', './test/**/**.test.ts'])
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});


gulp.task('default', ['lint', 'tsc', 'tsc-tests']);
