import fs         from 'fs';
import gulp       from 'gulp';
import jest       from 'gulp-jest';
import jplugin    from 'gulp-jest-cli';
import stylint    from 'gulp-stylint';
import eslint     from 'gulp-eslint';
import watch      from 'gulp-watch';
import sourcemaps from 'gulp-sourcemaps';
import rename     from 'gulp-rename';
import stylus     from 'gulp-stylus';
import buffer     from 'vinyl-buffer';
import source     from 'vinyl-source-stream';
import babelify   from 'babelify';
import browserify from 'browserify';
import bootstrap  from 'bootstrap-styl';
import dotenv     from 'dotenv';


//  Env
const env = dotenv.config().parsed;
const isDevelopment = (env.NODE_ENV == 'development') ? true:false;
const babelrc = JSON.parse(fs.readFileSync('./.babelrc'));

//  Notify: Production or Development
console.log(`\n ${env.NODE_ENV.toUpperCase()}\n`);


//  Jest Javascript
gulp.task('jest', () => {
  return gulp.src('./test/js/')
             .pipe(jplugin({
               'config': '.jestrc',
               'coverage': true,
               'onlyChanged': false,
               'preprocessorIgnorePatterns': ['<rootDir>/dist/', '<rootDir>/node_modules/'],
               'updateSnapshot': true,
             }))
             .on('finish', () => { console.log('\n\n') });
});


//  Lint Javascript
gulp.task('lint', () => {
  return gulp.src(['./src/react/*.jsx', './src/react/**/*.jsx'])
             .pipe(eslint())
             .pipe(eslint.format())
             .pipe(eslint.failAfterError())
             .on('error', err => {
               if (err.plugin === 'gulp-eslint') {

               }
             })
             .on('finish', () => { console.log('\n\n') });
});


//  Lint CSS
gulp.task('stylint', () => {
  return gulp.src(['./src/stylus/*.styl'])
             .pipe(stylint({config: '.stylintrc'}))
             .pipe(stylint.reporter())
             .on('finish', () => { console.log('\n\n') });
});


//  Build Stylus
gulp.task('stylus', () => {
  return gulp.src(['./src/stylus/common.styl'])
             .pipe(sourcemaps.init())
             .pipe(stylus({
                compress: true,
                use: [bootstrap()]
             }))
             .pipe(sourcemaps.write())
             .pipe(rename('common.min.css'))
             .pipe(gulp.dest('./dist/'))
             .on('finish', () => { console.log('\n\n') });
});


//  Build JS
gulp.task('js', () => {
  browserify({
    entries: './src/react/Common.jsx',
    extensions: ['.jsx'],
    debug: isDevelopment
  })
  .transform(babelify, babelrc)
  .bundle()
  .pipe(source('common.min.js'))
  .pipe(buffer())
  .pipe(gulp.dest('./dist/'));
});


//  Gulp Watch Test
gulp.task('test:watch',['jest', 'lint', 'stylint'], () => {
  gulp.watch(['./test/js/*.test.js'], ['jest']);
  gulp.watch(['./src/react/**/*.{jsx, js}'], ['lint', 'jest']);
  gulp.watch(['./src/stylus/**/*.styl'], ['stylint']);
});

//  Gulp Watch Prod
gulp.task('prod:watch',['stylus', 'js'], () => {
  gulp.watch(['./src/react/**/*.{jsx, js}'], ['js']);
  gulp.watch(['./src/stylus/**/*.styl'], ['stylus']);
});

//  Gulp Test
gulp.task('test',['jest', 'lint', 'stylint']);

//  Gulp Prod
gulp.task('prod',['stylus', 'js']);


//  Default
gulp.task('default', ['watch']);
