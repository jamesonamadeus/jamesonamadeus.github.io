var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');


//gulp sass
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss') 
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

//gulp watch
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 

    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
});

//gulp concatenate
gulp.task('useref', function(){
    return gulp.src('app/*.html')
      .pipe(useref())
      // Minifies only if it's a JS or CSS file
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cssnano()))
      .pipe(gulp.dest('dist'))
});