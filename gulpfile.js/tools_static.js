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
  /** bootstrap_5 **/
  bootstrap_5_css_path = tools_static_src_css + "bootstrap_5.css",
  /** tools **/
  tools_js_path = tools_static_src_js + "tools.js",
  tools_css_path = tools_static_src_css + "tools.css",
  /** survey **/
  survey_js_path = tools_static_src_js + "survey.js",
  survey_css_path = tools_static_src_css + "survey.css",
  /** index **/
  index_js_path = tools_static_src_js + "index.js",
  index_css_path = tools_static_src_css + "index.css",
  /** phone_number **/
  phone_number_js_path = tools_static_src_js + "phone_number.js",
  phone_number_css_path = tools_static_src_css + "phone_number.css",
  /** photo_info **/
  photo_info_js_path = tools_static_src_js + "photo_info.js",
  photo_info_css_path = tools_static_src_css + "photo_info.css";


/**
 * Task
 * 任务
 */
task(copy_tools_css);
task(copy_tools_js);
task(cleanCSS_tools);
task(terser_tools);
task(watch_tools);

/**
 * Combined tasks
 * 合并任务
 */
task("copy_tools",
  parallel(
    copy_tools_css,
    copy_tools_js,
  )
);
task("minimize_tools",
  parallel(
    "cleanCSS_tools",
    "terser_tools",
  )
);
task("build_tools",
  parallel(
    "copy_tools",
    "minimize_tools",
  )
);

// Tasks function
// 任务函数
function copy_tools_css(done) {
  src([tools_css_path, index_css_path, survey_css_path, phone_number_css_path, photo_info_css_path, bootstrap_5_css_path], {since: lastRun(copy_tools_css)})
    .pipe(dest(static_css));
  done();
}

function copy_tools_js(done) {
  src([tools_js_path, index_js_path, survey_js_path, phone_number_js_path, photo_info_js_path], {since: lastRun(copy_tools_js)})
    .pipe(dest(static_js));
  done();
}

function cleanCSS_tools(done) {
  src([tools_css_path, index_css_path, survey_css_path, phone_number_css_path, photo_info_css_path, bootstrap_5_css_path], {since: lastRun(cleanCSS_tools)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function terser_tools(done) {
  src([tools_js_path, index_js_path, survey_js_path, phone_number_js_path, photo_info_js_path], {since: lastRun(terser_tools)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function watch_tools(done) {
  watch([tools_static_src_path + "**/*"], task("build_tools"));
  done();
}
