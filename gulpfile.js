var gulp = require('gulp');
var sass = require('gulp-sass');


//html
gulp.task("copy-html",function () {
    return gulp.src('*.html')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang'));
});


//img
gulp.task('copy-images',function(){
    return gulp.src('img/*.{jpg,png,tmp,gif}')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang\\img'));
});


//scss
gulp.task('copy-scss', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

//css
gulp.task('copy-css', function(){
    return gulp.src('css/*.css')
        .pipe(sass())
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang\\css'));
});


//js
gulp.task('copy-js',function(){
    return gulp.src('js/*.js')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang\\js'));
});



//php
gulp.task('copy-php',function(){
    return gulp.src('php/*.php')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang\\php'));
});

//font
gulp.task('copy-font',function(){
    return gulp.src('font/**')
        .pipe(gulp.dest('D:\\phpStudy\\WWW\\liangcang\\font'));
});



gulp.task("watchall",function(){
    //监视所有文件是否有变化，如果有变化，就执行任务：copy
    gulp.watch("*.html",gulp.series("copy-html"));
    gulp.watch('img/*.{jpg,png,tmp,gif}',gulp.series("copy-images"));
    gulp.watch('js/*.js',gulp.series("copy-js"));
    gulp.watch('scss/*.scss',gulp.series("copy-scss"));
    gulp.watch('css/*.css',gulp.series("copy-css"));
    gulp.watch('php/*.php',gulp.series("copy-php"));
    gulp.watch('font/**',gulp.series("copy-font"));
});