const config_file = './config.json',
  common_config = require(config_file),
  {task, src, dest, parallel, lastRun, watch} = require('gulp'),
  concat = require('gulp-concat'),
  footer = require('gulp-footer'),
  rename = require("gulp-rename");

// Static Files Path
// 静态文件路径
const
  root = "./wwwroot/",
  static_path = root + "static/",
  static_js = static_path + "js/",
  static_css = static_path + "css/",
  /** FunDebug **/
  fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug." + "*.*.*" + ".min.js",
  /** bootstrap-modal-js **/
  bootstrap_modal_js_all_js_path = "./node_modules/bootstrap-modal-js/dist/*",
  /** bs-custom-file-input **/
  bs_custom_file_input_all_js_path = "./node_modules/bs-custom-file-input/dist/*",
  /** js.cookie.js **/
  js_cookie_all_js_path = "./node_modules/js-cookie/dist/js.cookie*",
  /** jquery **/
  jquery_all_js_path = "./node_modules/jquery/dist/jquery*",
  /** popper.js **/
  popper_all_umd_js_path = "./node_modules/popper.js/dist/umd/*",
  /** Bootstrap **/
  bootstrap_all_js_path = "./node_modules/bootstrap/dist/js/*",
  bootstrap_all_css_path = "./node_modules/bootstrap/dist/css/*",
  /** Bootstrap-master-dist **/
  bootstrap_master_dist_all_path = "./node_modules/bootstrap-master/dist/**/*",
  /** bootstrap-table **/
  bootstrap_table_js_path = "./node_modules/bootstrap-table/dist/bootstrap-table.js",
  bootstrap_table_js_min_path = "./node_modules/bootstrap-table/dist/bootstrap-table.min.js",
  bootstrap_table_css_path = "./node_modules/bootstrap-table/dist/bootstrap-table.css",
  bootstrap_table_css_min_path = "./node_modules/bootstrap-table/dist/bootstrap-table.min.css",
  bootstrap_table_all_locale_js_path = "./node_modules/bootstrap-table/dist/locale/*",
  bootstrap_table_zh_CN_js_path = "./node_modules/bootstrap-table/dist/locale/bootstrap-table-zh-CN.js",
  bootstrap_table_zh_CN_min_js_path = "./node_modules/bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js",
  /** fontawesome-free **/
  all_fontawesome_free_path = "./node_modules/@fortawesome/fontawesome-free/**/*",
  /** dayjs.js **/
  concat_after_file_name = "day_js_with_locale.min.js",
  dayjs_min_js_path = "./node_modules/dayjs/dayjs.min.js",
  dayjs_locale_zh_cn_js_path = "./node_modules/dayjs/locale/zh-cn.js",
  /** animate.css **/
  animate_all_css_path = "./node_modules/animate.css/animate.*css",
  /** aqua.css **/
  aqua_all_css_path = "./node_modules/@alphardex/aqua.css/dist/*",
  /** hover.css **/
  hover_css_path = "./node_modules/hover.css/css/hover.css",
  hover_css_map_path = "./node_modules/hover.css/css/hover.css.map",
  hover_min_css_path = "./node_modules/hover.css/css/hover-min.css",
  /** hamburgers.css **/
  hamburgers_all_css_path = "./node_modules/hamburgers/dist/*.css",
  /** cleave.js **/
  cleave_js_path = "./node_modules/cleave.js/dist/cleave.js",
  cleave_min_js_path = "./node_modules/cleave.js/dist/cleave.min.js",
  /** node-qrcode **/
  qrcode_build_path = "./node_modules/qrcode/build/*",
  /** blueimp-md5 **/
  md5_all_js_path = "./node_modules/blueimp-md5/js/*",
  /** bootstrap-colorpicker.js **/
  bootstrap_color_picker_all_js_path = "./node_modules/bootstrap-colorpicker/dist/js/*",
  bootstrap_color_picker_all_css_path = "./node_modules/bootstrap-colorpicker/dist/css/*",
  /** clipboard.js **/
  clipboard_min_js_path = "./node_modules/clipboard/dist/clipboard.min.js";

//Task
task(copy_fontawesome_free);
task(copy_js_cookie);
task(copy_jquery);
task(copy_popper);
task(copy_bootstrap);
task(copy_bootstrap_master_dist);
task(copy_bootstrap_table);
task(copy_animate_css);
task(copy_aqua_css);
task(copy_hover_css);
task(copy_cleave_js);
task(copy_hamburgers_css);
task(copy_bootstrap_modal_js);
task(copy_bs_custom_file_input);
task(copy_dayjs);
task(copy_clipboard);
task(copy_qrcode);
task(copy_md5);
task(copy_bootstrap_colorPicker);

/** task("add_header"); **/
task(add_footer_funDebug_api);

task(watch_config_json);

//Combined tasks
task("copy_common",
  parallel(
    copy_fontawesome_free,
    copy_js_cookie,
    copy_jquery,
    copy_popper,
    copy_bootstrap,
    copy_bootstrap_master_dist,
    copy_bootstrap_table,
    copy_animate_css,
    copy_aqua_css,
    copy_hover_css,
    copy_cleave_js,
    copy_hamburgers_css,
    copy_bootstrap_modal_js,
    copy_bs_custom_file_input,
    copy_dayjs,
    copy_clipboard,
    copy_qrcode,
    copy_md5,
    copy_bootstrap_colorPicker,
  )
);
task("add_footer",
  parallel(
    add_footer_funDebug_api,
  )
);
task("build_common",
  parallel(
    "add_footer",
    "copy_common",
  )
);

//Tasks function
function copy_fontawesome_free(done) {
  src([all_fontawesome_free_path], {since: lastRun(copy_fontawesome_free)})
    .pipe(dest(static_path + "/font/"));
  done();
}

function copy_bootstrap_modal_js(done) {
  src([bootstrap_modal_js_all_js_path], {since: lastRun(copy_bootstrap_modal_js)})
    .pipe(dest(static_js));
  done();
}

function copy_bs_custom_file_input(done) {
  src([bs_custom_file_input_all_js_path], {since: lastRun(copy_bs_custom_file_input)})
    .pipe(dest(static_js));
  done();
}

function copy_dayjs(done) {
  src([dayjs_min_js_path, dayjs_locale_zh_cn_js_path], {since: lastRun(copy_dayjs)})
    .pipe(concat(concat_after_file_name))
    .pipe(dest(static_js));
  done();
}

function copy_clipboard(done) {
  src([clipboard_min_js_path], {since: lastRun(copy_clipboard)})
    .pipe(dest(static_js));
  done();
}

function copy_bootstrap_colorPicker(done) {
  src([bootstrap_color_picker_all_js_path], {since: lastRun(copy_bootstrap_colorPicker)})
    .pipe(dest(static_js));
  src([bootstrap_color_picker_all_css_path], {since: lastRun(copy_bootstrap_colorPicker)})
    .pipe(dest(static_css));
  done();
}

function copy_qrcode(done) {
  src([qrcode_build_path], {since: lastRun(copy_qrcode)})
    .pipe(dest(static_js));
  done();
}

function copy_md5(done) {
  src([md5_all_js_path], {since: lastRun(copy_md5)})
    .pipe(dest(static_js));
  done();
}

function copy_bootstrap(done) {
  src([bootstrap_all_js_path], {since: lastRun(copy_bootstrap)})
    .pipe(dest(static_js));
  src([bootstrap_all_css_path], {since: lastRun(copy_bootstrap)})
    .pipe(dest(static_css));
  done();
}

function copy_bootstrap_master_dist(done) {
  src([bootstrap_master_dist_all_path], {since: lastRun(copy_bootstrap_master_dist)})
    .pipe(dest(static_path + 'bootstrap-master-dist/'));
  done();
}

function copy_bootstrap_table(done) {
  src([bootstrap_table_js_path, bootstrap_table_js_min_path, bootstrap_table_all_locale_js_path, bootstrap_table_zh_CN_js_path, bootstrap_table_zh_CN_min_js_path,], {since: lastRun(copy_bootstrap_table)})
    .pipe(dest(static_js));
  src([bootstrap_table_css_path, bootstrap_table_css_min_path], {since: lastRun(copy_bootstrap_table)})
    .pipe(dest(static_css));
  done();
}

function copy_animate_css(done) {
  src([animate_all_css_path], {since: lastRun(copy_animate_css)})
    .pipe(dest(static_css));
  done();
}

function copy_aqua_css(done) {
  src([aqua_all_css_path], {since: lastRun(copy_aqua_css)})
    .pipe(dest(static_css));
  done();
}

function copy_hover_css(done) {
  src([hover_min_css_path], {since: lastRun(copy_hover_css)})
    .pipe(rename("hover.min.css"))
    .pipe(dest(static_css));
  src([hover_css_path, hover_css_map_path], {since: lastRun(copy_hover_css)})
    .pipe(dest(static_css));
  done();
}

function copy_cleave_js(done) {
  src([cleave_min_js_path], {since: lastRun(copy_cleave_js)})
    .pipe(dest(static_js));
  src([cleave_js_path], {since: lastRun(copy_cleave_js)})
    .pipe(dest(static_js));
  done();
}

function copy_hamburgers_css(done) {
  src([hamburgers_all_css_path], {since: lastRun(copy_hamburgers_css)})
    .pipe(dest(static_css));
  done();
}

function copy_popper(done) {
  src([popper_all_umd_js_path], {since: lastRun(copy_popper)})
    .pipe(dest(static_js));
  done();
}

function copy_jquery(done) {
  src([jquery_all_js_path], {since: lastRun(copy_jquery)})
    .pipe(dest(static_js));
  done();
}

function copy_js_cookie(done) {
  src([js_cookie_all_js_path], {since: lastRun(copy_js_cookie)})
    .pipe(dest(static_js));
  done();
}

function add_footer_funDebug_api(done) {
  const add_text = '\nfundebug.init({apikey:"' + common_config.fundebug_api_key + '"});\n';
  src([fundebug_js_path], {since: lastRun(add_footer_funDebug_api)})
    .pipe(footer(add_text))
    .pipe(rename('fundebug.min.js'))
    .pipe(dest(static_js));
  done();
}

function watch_config_json(done) {
  watch([config_file], task('add_footer_funDebug_api'));
  done();
}
