import gulp     from 'gulp';
import jest     from 'gulp-jest';
import stylint  from 'gulp-stylint';
import eslint   from 'gulp-eslint';
import watch    from 'gulp-watch';


//  Jest Javascript
gulp.task('jest', () => {
  return gulp.src('./test/js/')
              .pipe(jest())
              .on('finish', () => { console.log('\n\n') });
});


//  Lint Javascript
gulp.task('lint', () => {
  return gulp.src(['./src/react/*.jsx', './src/react/**/*.jsx'])
             .pipe(eslint())
             .pipe(eslint.format())
             .on('finish', () => { console.log('\n\n') });
});


//  Lint CSS
gulp.task('stylint', () => {
  return gulp.src(['./src/stylus/*.styl'])
             .pipe(stylint({config: '.stylintrc'}))
             .pipe(stylint.reporter())
             .on('finish', () => { console.log('\n\n') });
});


//  Gulp Watch
gulp.task('watch',['jest', 'lint', 'stylint'], () => {
  gulp.watch(['./src/react/**/*.jsx'], ['jest', 'lint']);
  gulp.watch(['./src/stylus/**/*.styl'], ['stylint']);
});


//  Default
gulp.task('default', ['watch']);