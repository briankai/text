var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var reload = browserSync.reload;
var del = require('del');
gulp.task('hello', function() {
  console.log('hello word');
});


gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "./app",
      directory: true
    }
  });
  gulp.watch("app/*.html").on('change', reload);
  gulp.watch("app/css/*.css").on('change', reload);
  gulp.watch("app/js/*.js").on('change', reload);
});


gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
gulp.task('clean', function() {
  del('dist');
});