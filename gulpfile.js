// *************************************
//
//   Gulpfile
//
// *************************************

// -------------------------------------
//   Requires
// -------------------------------------

var gulp = require('gulp');
var scss = require('gulp-scss');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

// -------------------------------------
//   Task: Compile
// -------------------------------------

gulp.task('compile', function() {
  gulp.src('application.scss')
    .pipe(scss())
    .pipe(rename('spellbook-modules.css'))
    .pipe(gulp.dest('dist'));
});

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', function() {
  gulp.src('dist/spellbook-modules.css')
    .pipe(rename('spellbook-modules.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
