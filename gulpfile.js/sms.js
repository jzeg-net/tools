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
  /** sms_index **/
  sms_index_js_path = tools_static_src_js + "sms_index.js",
  sms_index_css_path = tools_static_src_css + "sms_index.css",
  /** sms_query **/
  sms_query_js_path = tools_static_src_js + "sms_query.js",
  sms_query_css_path = tools_static_src_css + "sms_query.css";


/**
 * Task
 * 任务
 */
task(copy_sms_js);
task(copy_sms_css);
task(terser_sms);
task(cleanCSS_sms);
task(watch_sms);


/**
 * Combined Tasks
 * 合并任务
 */
task('copy_sms',
  parallel(
    'copy_sms_js',
    'copy_sms_css',
  ));
task("minimize_sms",
  parallel(
    "terser_sms",
    "cleanCSS_sms",
  )
);
task("build_sms",
  parallel(
    "minimize_sms",
    "copy_sms",
  )
);

function copy_sms_js(done) {
  src([sms_index_js_path, sms_query_js_path], {since: lastRun(copy_sms_js)})
    .pipe(dest(static_js));
  done();
}

function copy_sms_css(done) {
  src([sms_index_css_path, sms_query_css_path], {since: lastRun(copy_sms_css)})
    .pipe(dest(static_css));
  done();
}

function terser_sms(done) {
  src([sms_index_js_path, sms_query_js_path], {since: lastRun(terser_sms)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function cleanCSS_sms(done) {
  src([sms_index_css_path, sms_query_css_path], {since: lastRun(cleanCSS_sms)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_sms(done) {
  watch([sms_index_js_path, sms_index_css_path, sms_query_js_path, sms_query_css_path], task("build_sms"));
  done();
}
