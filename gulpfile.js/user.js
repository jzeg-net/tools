const {task, src, dest, parallel, lastRun, watch} = require('gulp'),
  cleanCSS = require("gulp-clean-css"),
  autoPreFixer = require("autoprefixer"),
  postcss = require("gulp-postcss"),
  terser = require("gulp-terser"),
  // concat = require('gulp-concat'),
  rename = require("gulp-rename");
// header = require('gulp-header'),
// footer = require('gulp-footer'),
// del = require("del");

// Static Files Path
// 静态文件路径
const
  static_path = "./static/",
  static_js = static_path + "js/",
  static_css = static_path + "css/",
  //页面静态文件路径
  /** 路径定义 **/
  tools_static_src_path = "./tools_static_src/",
  tools_static_src_js = tools_static_src_path + "js/",
  tools_static_src_css = tools_static_src_path + "css/",
  /** user_index **/
  user_index_js_path = tools_static_src_js + "user_index.js",
  user_index_css_path = tools_static_src_css + "user_index.css";


/**
 * Task
 * 任务
 */
task(copy_user_js);
task(copy_user_css);
task(terser_user);
task(cleanCSS_user);
task(watch_user);


/**
 * Combined Tasks
 * 合并任务
 */
task('copy_user',
  parallel(
    'copy_user_js',
    'copy_user_css',
  ));
task("minimize_user",
  parallel(
    "terser_user",
    "cleanCSS_user",
  )
);
task("build_user",
  parallel(
    "minimize_user",
    "copy_user",
  )
);

function copy_user_js(done) {
  src([user_index_js_path], {since: lastRun(copy_user_js)})
    .pipe(dest(static_js));
  done();
}

function copy_user_css(done) {
  src([user_index_css_path], {since: lastRun(copy_user_css)})
    .pipe(dest(static_css));
  done();
}

function terser_user(done) {
  src([user_index_js_path], {since: lastRun(terser_user)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function cleanCSS_user(done) {
  src([user_index_css_path], {since: lastRun(cleanCSS_user)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_user(done) {
  watch([user_index_js_path, user_index_css_path], task("build_user"));
  done();
}
