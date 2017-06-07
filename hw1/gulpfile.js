const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require('gulp-sourcemaps');

let paths = {
	scss: './scss/*.scss'
}

gulp.task('sass', function (done) {
	gulp.src(paths.scss)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.', { sourceRoot: '/' }))
	.pipe(gulp.dest('./css'));

	done();
})