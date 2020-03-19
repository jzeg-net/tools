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
  static_img = static_path + "img/",
  //页面静态文件路径
  /** 路径定义 **/
  tools_static_src_path = "./tools_static_src/",
  tools_static_src_js = tools_static_src_path + "js/",
  tools_static_src_css = tools_static_src_path + "css/",
  tools_static_src_img = tools_static_src_path + "img/",
  /** jt_qrcode **/
  jt_qrcode_js_path = tools_static_src_js + "jt_qrcode.js",
  jt_qrcode_css_path = tools_static_src_css + "jt_qrcode.css",
  jt_qrcode_img_manage_path = tools_static_src_img + "lhm-manage.png";

// Task
// 任务
task(copy_jt_qrcode_js);
task(copy_jt_qrcode_css);
task(copy_jt_qrcode_img_manage);

task(terser_jt_qrcode);
task(cleanCSS_jt_qrcode);

task(watch_jt_qrcode);

// Combined tasks
// 合并任务
task('copy_jt_qrcode',
  parallel(
    'copy_jt_qrcode_js',
    'copy_jt_qrcode_css',
    'copy_jt_qrcode_img_manage',
  ));
task("minimize_jt_qrcode",
  parallel(
    "terser_jt_qrcode",
    "cleanCSS_jt_qrcode",
  )
);
task("build_jt_qrcode",
  parallel(
    "minimize_jt_qrcode",
    "copy_jt_qrcode",
  )
);

function copy_jt_qrcode_js(done) {
  src([jt_qrcode_js_path], {since: lastRun(copy_jt_qrcode_js)})
    .pipe(dest(static_js));
  done();
}

function terser_jt_qrcode(done) {
  src([jt_qrcode_js_path], {since: lastRun(terser_jt_qrcode)})
    .pipe(terser())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_js));
  done();
}

function copy_jt_qrcode_css(done) {
  src([jt_qrcode_css_path], {since: lastRun(copy_jt_qrcode_css)})
    .pipe(dest(static_css));
  done();
}

function copy_jt_qrcode_img_manage(done) {
  src([jt_qrcode_img_manage_path], {since: lastRun(copy_jt_qrcode_img_manage)})
    .pipe(dest(static_img));
  done();
}

function cleanCSS_jt_qrcode(done) {
  src([jt_qrcode_css_path], {since: lastRun(cleanCSS_jt_qrcode)})
    .pipe(postcss([autoPreFixer()]))
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest(static_css));
  done();
}

function watch_jt_qrcode(done) {
  watch([jt_qrcode_js_path, jt_qrcode_css_path], task("build_jt_qrcode"));
  done();
}
