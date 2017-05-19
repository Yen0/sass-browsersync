var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sass 	= require('gulp-sass');

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
    gulp.watch("./css/**/*.css").on("change", reload);
});

gulp.task('default',['sass:watch','serve']);

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({indentedSyntax: true}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

