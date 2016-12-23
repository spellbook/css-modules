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
  gulp.src('modules/*.scss')
    .pipe(scss())
    .pipe(rename(function(filename) {
      filename.basename = filename.basename.replace('_', '');
      return filename;
    }))
    .pipe(gulp.dest('dist/modules'));
});

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', function() {
  gulp.src('dist/spellbook-modules.css')
    .pipe(rename('spellbook-modules.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
  gulp.src(['dist/modules/*.css', '!dist/modules/*.min.css'])
    .pipe(rename({ suffix : '.min' }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/modules'));
});
