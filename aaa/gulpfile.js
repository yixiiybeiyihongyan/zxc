var gulp = require('gulp'),
    uglify = require('gulp-uglify');
 
gulp.task('jsmin', function () {
    gulp.src(['js/1.js']) //多个文件以数组形式传入
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});