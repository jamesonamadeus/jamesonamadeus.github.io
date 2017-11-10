var gulp = require('gulp');
var sass = require('gulp-sass');

//gulp sass
gulp.task('sass', function(){
    return gulp.src('app/scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
});

//gulp watch
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 

})