var gulp = require('gulp'),
    minify = require('gulp-minify'),
    sass = require('gulp-sass'),
    input = './sass/*.sass',
    output = './style',
    sassOptions = { 
    	errLogToConsole: true,
    	outputStyle: 'expanded'
    };

gulp.task('default', ['sass', 'watch']);

gulp.task('compress', function() {
  gulp.src('./js/*.js')
    .pipe(minify({
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js','-min.js']
    }))
    .pipe(gulp.dest('dist'));
  gulp.src('./*.html')
    .pipe(minify({}))
    .pipe(gulp.dest('dist'));
  gulp.src('./style/*.css')
    .pipe(minify({}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() { 
	return gulp
		.watch(input, ['sass'])
		.on('change', function(event) { 
			console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		});
});

gulp.task('sass', function() { 
	return gulp
		.src(input)
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(gulp.dest(output));
});
