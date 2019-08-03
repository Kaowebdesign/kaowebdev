var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    plumber = require('gulp-plumber');

gulp.task('sass', function() { 
    return gulp.src('scss/**/*.scss') 
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('./static/css/'))

});

gulp.task('css-min', ['sass'], function() {
    return gulp.src('scss/style.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./static/css/'))
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('clean', function() {
    return del.sync(['./static/css/style.css']);
});

gulp.task('watch', ['clear','clean','build'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('build', ['clean','clear', 'sass','css-min'], function() {
    // var buildMainCss = gulp.src(['scss/style.min.css','scss/style.css'])
    //     .pipe(gulp.dest('./css'));
});

gulp.task('default', ['watch']);