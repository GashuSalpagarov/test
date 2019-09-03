const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src('css/*', {read: false})
      .pipe(clean());
  });

gulp.task('styles', function (){
    return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false,
        grid: "no-autoplace"
    }))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
});

 
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('clean','styles'))
})