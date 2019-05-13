'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var { series } = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');



const paths = {
    script_initial: {
      js: 'src/helpers/js/*.js',
      scss: 'src/helpers/scss/*.scss'
    },
    script_final: {
        js: 'src/helpers/js',
        css: 'src/helpers/css'
    }
};




function minifyjs(){
  return gulp.src(paths.script_initial.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.script_final.js));  
};
 
function scss() {
  return gulp.src(paths.script_initial.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.script_final.css));
};
const watch = () => {
    gulp.watch(paths.script_initial.js, gulp.series(minifyjs));
    gulp.watch(paths.script_initial.scss, gulp.series(scss));
}

const dev = gulp.series( minifyjs, scss, watch);

exports.default = dev;
exports.sass = scss;