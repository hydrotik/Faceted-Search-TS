var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    del = require('del'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    package = require('./package.json'),
    config = require('./gulp.config.json'),
    ts = require('gulp-typescript'),
    runSequence = require('run-sequence'),
    merge = require('merge2'),
    tslint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    template = require('gulp-template');


// VARIABLES ======================================================
var isDist = $.util.env.type === 'dist';
var outputFolder = isDist ? 'dist' : 'build';

var globs = config.globs;

console.log(globs);

var destinations = {
  css: outputFolder + config.destinations.css,
  js: outputFolder + config.destinations.js,
  libs: outputFolder + config.destinations.libs,
  assets: outputFolder + config.destinations.assets,
  index: outputFolder
};

// When adding a 3rd party we want to insert in the html, add it to
// vendoredLibs, order matters
var vendoredLibs = config.vendoredLibs;



var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');


// Will be filled automatically
var vendoredLibsMin = [];

var injectLibsPaths = {
  dev: [],
  dist: []
};

var injectPaths = {
  dev: [],
  dist: []
};

vendoredLibs.forEach(function(lib) {
  // take the filename
  var splittedPath = lib.split('/');
  var filename = splittedPath[splittedPath.length -1];
  injectLibsPaths.dev.push(destinations.libs + '/' + filename);
  // And get the minified version
  filename = filename.split('.')[0] + '.min.js';
  splittedPath[splittedPath.length - 1] = filename;
  vendoredLibsMin.push(splittedPath.join('/'));
  injectLibsPaths.dist.push(destinations.libs + '/' + filename);
});

['dev', 'dist'].forEach(function (env) {
  injectPaths[env] = injectLibsPaths[env].concat([
    destinations.js + "/app/**/module.js",
    isDist ? destinations.js + '/app.js' : destinations.js + "/app/**/*.js",
    destinations.js + "/templates.js",
    destinations.css + "/*.css"
  ]);
});


// TASKS ===========================================================

gulp.task('sass', function () {
  return gulp.src(globs.sass)
    .pipe($.sass({style: 'compressed', errLogToConsole: true}))
    .pipe($.autoprefixer())  // defauls to > 1%, last 2 versions, Firefox ESR, Opera 12.1
    .pipe(gulp.dest(destinations.css))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(header(banner, { package : package }))
    .pipe(gulp.dest(destinations.css))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('ts-lint', function () {
  /*return gulp.src(globs.tsc)
    .pipe($.tslint())
    .pipe($.tslint.report('prose', {emitError: true}));*/

  return gulp.src(globs.tsc)
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task('ts-compile', function () {
  /*
  var tsResult = gulp.src(globs.appWithDefinitions)
    .pipe($.typescript(tsProject));

  return tsResult.js.pipe(isDist ? $.concat('app.js') : $.util.noop())
    .pipe($.ngAnnotate({gulpWarnings: false}))
    .pipe(isDist ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(destinations.js))
    .pipe(browserSync.reload({stream: true}));
    */

    // globs.appWithDefinitions
    var tsResult = gulp.src(globs.tsc)
                       .pipe(ts({
                           declarationFiles: true,
                           noExternalResolve: false,
                           sortOutput: true
                       }));
    /*
    return tsResult.js.pipe(merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest(destinations.js))
    ]))
*/
    return tsResult.js.pipe(gulp.dest(destinations.js))
    .pipe(concat('app.js'))
    //.pipe(uglify())
    .pipe(header(banner, { package : package }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(destinations.js));
});

gulp.task('clean', function (cb) {
  del(['dist/', 'build/'], cb);
});


gulp.task('browser-sync', function () {
  return browserSync({
    open: false,
    server: {
      baseDir: "./build"
    },
    watchOptions: {
      debounceDelay: 1000
    }
  });
});

gulp.task('copy-vendor', function () {
  return gulp.src(isDist ? vendoredLibsMin : vendoredLibs)
    .pipe(gulp.dest(destinations.libs));
});

gulp.task('copy-assets', function () {
  return gulp.src(globs.assets)
    .pipe(gulp.dest(destinations.assets));
});

gulp.task('index', function () {
  var target = gulp.src(globs.index);
  /*var _injectPaths = isDist ? injectPaths.dist : injectPaths.dev;

  return target.pipe(
    $.inject(gulp.src(_injectPaths, {read: false}), {
      ignorePath: outputFolder,
      addRootSlash: false
    })
  ).pipe(gulp.dest(destinations.index));
*/


    return target.pipe(template({footerjs : config.vendor}))
        .pipe(gulp.dest(destinations.index));
});

gulp.task('watch', function() {
  gulp.watch(globs.sass, ['sass']);
  gulp.watch(globs.tsc, ['ts-lint', 'ts-compile']);
  gulp.watch(globs.index, ['index']);
  gulp.watch(globs.assets, ['copy-assets']);
});

gulp.task(
  'build',
  runSequence(
    'clean',
    ['sass', 'copy-assets', 'ts-compile', 'copy-vendor'],
    'index'
  )
);

gulp.task(
  'default',
  runSequence('build', ['browser-sync', 'watch'])
);
