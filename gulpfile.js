var gulp = require('gulp');
var order = require("gulp-order");
var autoprefixer = require('gulp-autoprefixer');
var concat = require("gulp-concat");
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var notify = require("gulp-notify");
var connect = require("gulp-connect");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

swallowError = function(error) {
    console.log(error.toString());
    notify().write(error.toString());
    this.emit('end');
};


gulp.task('sass', function() {
    gulp;
    return gulp.src('src/css/*.scss').pipe(sourcemaps.init()).pipe(sass({
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }
    })).pipe(minifyCss({
        compatibility: 'ie8'
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task("connect", function() {
    return connect.server({
        root: "dist/",
        port: 1338,
        livereload: true
    });
});


gulp.task("css-min", function() {
    return gulp.src(["src/css/libs/base.css", "src/css/libs/**/*.css"]).pipe(concat("libs.css")).pipe(minifyCss({keepBreaks: false,
        processImport: false
    })).pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {  
  gulp.src("src/js/**/*.js")  
  .pipe(gulp.dest('dist/js'))
  .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['src/css/libs/*.css'], ['css-min']);    
    gulp.watch(['src/css/**/*.scss'], ['sass']);        
    gulp.watch(['src/js/**/*.*'], ['js']);      
});


gulp.task('default', ['css-min', 'sass','js', 'connect', 'watch']);
