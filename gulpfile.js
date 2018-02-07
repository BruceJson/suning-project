var gulp = require('gulp');
var csscomb = require('gulp-csscomb');
var path = require('path');

function resolve(url) {
	return path.join(__dirname, url);
}

gulp.task('one', function() {
	return new Promise((resolve, reject) => {
		var stream = gulp.src('./css/style.css')
			.pipe(csscomb())
			.pipe(gulp.dest('dist'));

		console.log('task one ok!!!');
		resolve();
	});
});

gulp.task('two', ['one'], function() {
	return new Promise((resolve, reject) => {
		console.log('task two ok!!!');
		resolve();
	});
});

gulp.task('default', ['two'], function() {
	console.log('default');
});
