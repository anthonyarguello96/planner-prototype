const gulp = require('gulp');
const {series} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const jasmineBrowser = require('gulp-jasmine-browser');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');

// styles task: this pipes our sass files compiles them into css
function styles(cb) {
  gulp.src('sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}))
      .on('error', sass.logError)
      .pipe(
          autoprefixer({
            browserlist: ['last 2 versions'],
          })
      )
      .pipe(gulp.dest('./dist/css'))
      .pipe(browserSync.stream());
  cb();
}


// watch task: will look for changes in the code and execute an action
// according to the file that has been changed.
function watch() {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('sass/**/*.scss', gulp.parallel(styles));
  gulp.watch('sass/**/*.scss').on('change', browserSync.reload);
  gulp.watch('index.html', gulp.parallel(copyHtml));
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js', gulp.series(lint, scripts));
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
  gulp.watch('img/*', gulp.parallel(copyImages));
  gulp.watch('img/*').on('change', browserSync.reload);
}


// lint task: willl soruce js code and check for mistakes
function lint(cb) {
  gulp.src(['js/**/*.js'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
}


// jasmine: will source js code and run it agaist the test in the spec file.
function jasmine() {
  return gulp.src(['js/**/*.js', 'spec/**/*_spec.js'])
      .pipe(jasmineBrowser.specRunner())
      .pipe(jasmineBrowser.server({port: 8888}));
}


// copyHtml and copyImages will source our html and imgaes and pipe them
// to the pruduction ready version
function copyHtml(cb) {
  gulp.src('index.html')
      .pipe(gulp.dest('dist'));
  cb();
}


function copyImages(cb) {
  gulp.src('img/*')
      .pipe(imagemin({
        progressive: true,
        use: imageminPngquant(),
      }))
      .pipe(gulp.dest('dist/img'));
  cb();
}


// This will do the js concatenation
function scripts() {
  return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      // IMPORTANT: Make sure the references tp js files point at all.js
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js'));
}


function scriptsDist() {
  return gulp.src('js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      // IMPORTANT: Make sure the references tp js files point at all.js
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/js'));
}


// when executed the task dist will generate a production ready version
// of the project
function dist(cb) {
  series(copyHtml, copyImages, styles, lint, scriptsDist);
  cb();
}


exports.default = series(styles, lint, copyHtml, copyImages, scripts, watch);
exports.styles = styles;
exports.jasmine =jasmine;
exports.lint = lint;
exports.scriptsDist = scriptsDist;
