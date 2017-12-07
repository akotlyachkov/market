let gulp = require('gulp'),
    path = require('path'),
    sourcemaps = require('gulp-sourcemaps'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

let commonCss = [
        'market/client/web/styles/common.scss',
    ],
    injectJs = [
        'market/client/web/build/browser.js'
    ],
    injectCss = [
        'market/client/web/build/styles.css'
    ],
    pugs = [
        'market/client/web/views/index.pug'
    ],
    destination = 'market/client/web/build';

function tildaResolver(url, prev, done) {
    if (url[0] === '~') {
        url = path.resolve('node_modules', url.substr(1));
    }
    return { file: url };
}

gulp.task('commonCss', function () {
    return gulp
        .src(commonCss)
        //.pipe(sourcemaps.init())
        .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(clean())
        .pipe(gulp.dest(destination))
});


gulp.task('inject', function () {
    const cssFiles = gulp.src(injectCss);
    const jsFiles = gulp.src(injectJs);
    return gulp.src(pugs)
        .pipe(inject(cssFiles, {ignorePath: 'market/client/web/build',addPrefix:'css'}))
        .pipe(inject(jsFiles, {ignorePath: 'market/client/web/build',addPrefix:'js'}))
        .pipe(pug())
        .pipe(gulp.dest('market/client/web/views'));
});

gulp.task('watch', ['commonCss'], function () {
    return gulp.watch([
        'market/client/web/styles/**/*.scss',
        'market/client/web/app1/**/*.scss'
    ], ['default'])
});

gulp.task('default',['commonCss','inject']);