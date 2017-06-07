const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')

gulp.task('styles', () => {
  return gulp.src('./src/styles/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/styles'))
})

gulp.task('views', () => {
  return gulp.src('./src/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public'))
})

gulp.task('clean', () => {
  return del('public')
})

gulp.task('build',
  gulp.series('clean',
    gulp.parallel('views', 'styles')
  )
)

gulp.task('watch', () => {
  gulp.watch('./src/styles/**/*.scss', gulp.series('styles'))
  gulp.watch('./src/**/*.pug', gulp.series('views'))
})

gulp.task('dev', gulp.series('build', gulp.parallel('watch')))