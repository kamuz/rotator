var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer'),
    tinypng = require('gulp-tinypng');

gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(rigger())
    .pipe(gulp.dest("./"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function() {
    return gulp.src([
        'src/css/owl-carousel.css',
        'src/css/owl-theme-default.css',
        'src/css/general.css',
        'src/css/home.css',
        'src/css/icons.css',
        'src/css/reset.css',
        'src/css/sidebar.css',
        'src/css/catalog.css',
        'src/css/buttons.css',
        'src/css/media.css',
        ])
    .pipe(concat('main.min.css'))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src([
        'src/js/jquery.js',
        'src/js/owl-carousel.js',
        'src/js/main.js',
        ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream: true}));
});
 
gulp.task('image', function () {
    gulp.src('src/img/**')
        .pipe(tinypng('aSfr1lOdpTctjiduADoTgk9z1oILsGMa'))
        .pipe(gulp.dest('img'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
    });
});

gulp.task('watch', ['html', 'css', 'js', 'browser-sync'], function() {
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/img/**', ['image']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
