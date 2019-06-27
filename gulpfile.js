// Gulp - Configuration
'use strict';

// Modules import
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const {
  phpMinify
} = require('@cedx/gulp-php-minify');

// Tasks
// PHP
gulp.task('php', () => gulp.src('./**/*.php', {
  read: false,
})
    .pipe(phpMinify({
      silent: true,
    }))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
    }))
    .pipe(size())
    .pipe(gulp.dest('./out'))
);
// Production
gulp.task('dist', gulp.parallel(
  'php',
));
