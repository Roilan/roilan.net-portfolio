var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
	gulp.src('assets/scss/main.scss')
		.pipe(sass({includePaths: ['assets/scss']}))
		.pipe(gulp.dest('assets/css'))
});

gulp.task('browser-sync', function() {
	browserSync.init(["assets/css/*.css", "assets/js/*.js"], {
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('reload-bs', function () {
    browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync'], function() {
	gulp.watch("assets/scss/*.scss", ['sass']);
	gulp.watch("*.html", ['reload-bs']);
	gulp.watch("assets/js/*.js", ['reload-bs']);
});