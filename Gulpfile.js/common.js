const config = require('./config.json'),
    {task, src, dest, series, parallel, lastRun, watch, registry, symlink} = require('gulp'),
    cleanCSS = require("gulp-clean-css"),
    autoPreFixer = require("autoprefixer"),
    postcss = require("gulp-postcss"),
    terser = require("gulp-terser"),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    del = require("del");

// Static Files Path
// 静态文件路径
const
    static_path = "./static/",
    static_js = static_path + "js/",
    static_css = static_path + "css/",
    /** FunDebug **/
    fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug." + "*.*.*" + ".min.js",
    /** bootstrap-modal-js **/
    bootstrap_modal_js_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.js",
    bootstrap_modal_js_min_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.min.js",
    /** bs-custom-file-input **/
    bs_custom_file_input_dist_path = "./node_modules/bs-custom-file-input/dist/*",
    /** js.cookie.js **/
    js_cookie_min_js_path = "./node_modules/js-cookie/dist/js.cookie.min.js",
    js_cookie_min_mjs_path = "./node_modules/js-cookie/dist/js.cookie.min.mjs",
    /** jquery **/
    jquery_js_path = "./node_modules/jquery/dist/jquery.js",
    jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js",
    /** popper.js **/
    popper_js_path = "./node_modules/popper.js/dist/umd/popper.js",
    popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js",
    popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map",
    popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map",
    /** Bootstrap **/
    bootstrap_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js",
    bootstrap_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    bootstrap_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map",
    bootstrap_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map",
    bootstrap_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css",
    bootstrap_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    bootstrap_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map",
    bootstrap_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map",
    /** fontawesome-free **/
    all_fontawesome_free_path = "./node_modules/@fortawesome/fontawesome-free/**/*",
    /** dayjs.js **/
    concat_after_file_name = "day_js_with_locale.min.js",
    dayjs_min_js_path = "./node_modules/dayjs/dayjs.min.js",
    dayjs_locale_zh_cn_js_path = "./node_modules/dayjs/locale/zh-cn.js",
    /** animate.css **/
    animate_css_path = "./node_modules/animate.css/animate.css",
    animate_min_css_path = "./node_modules/animate.css/animate.min.css",
    /** hover.css **/
    hover_min_css_path = "./node_modules/hover.css/css/hover-min.css",
    /** hamburgers.css **/
    hamburgers_css_path = "./node_modules/hamburgers/dist/hamburgers.css",
    hamburgers_min_css_path = "./node_modules/hamburgers/dist/hamburgers.min.css",
    /** node-qrcode **/
    qrcode_build_path = "./node_modules/qrcode/build/*",
    /** clipboard.js **/
    clipboard_min_js_path = "./node_modules/clipboard/dist/clipboard.min.js";

//Task
task(copy_fontawesome_free);
task(copy_js_cookie);
task(copy_jquery);
task(copy_popper);
task(copy_bootstrap);
task(copy_animate_css);
task(copy_hover_css);
task(copy_hamburgers_css);
task(copy_bootstrap_modal_js);
task(copy_bs_custom_file_input);
task(copy_dayjs);
task(copy_clipboard);
task(copy_qrcode);

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
        copy_animate_css,
        copy_hover_css,
        copy_hamburgers_css,
        copy_bootstrap_modal_js,
        copy_bs_custom_file_input,
        copy_dayjs,
        copy_clipboard,
        copy_qrcode,
    )
);
task("add_footer",
    parallel(
        add_footer_funDebug_api,
    )
);
task("build_static_common",
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
    src([bootstrap_modal_js_js_path, bootstrap_modal_js_min_js_path], {since: lastRun(copy_bootstrap_modal_js)})
        .pipe(dest(static_js));
    done();
}

function copy_bs_custom_file_input(done) {
    src([bs_custom_file_input_dist_path], {since: lastRun(copy_bs_custom_file_input)})
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

function copy_qrcode(done) {
    src([qrcode_build_path], {since: lastRun(copy_qrcode)})
        .pipe(dest(static_js));
    done();
}

function copy_bootstrap(done) {
    src([bootstrap_js_path, bootstrap_min_js_path, bootstrap_js_map_path, bootstrap_min_js_map_path], {since: lastRun(copy_bootstrap)})
        .pipe(dest(static_js));
    src([bootstrap_css_path, bootstrap_min_css_path, bootstrap_css_map_path, bootstrap_min_css_map], {since: lastRun(copy_bootstrap)})
        .pipe(dest(static_css));
    done();
}

function copy_animate_css(done) {
    src([animate_css_path, animate_min_css_path], {since: lastRun(copy_animate_css)})
        .pipe(dest(static_css));
    done();
}

function copy_hover_css(done) {
    src([hover_min_css_path], {since: lastRun(copy_hover_css)})
        .pipe(rename("hover.min.css"))
        .pipe(dest(static_css));
    done();
}

function copy_hamburgers_css(done) {
    src([hamburgers_css_path, hamburgers_min_css_path], {since: lastRun(copy_hamburgers_css)})
        .pipe(dest(static_css));
    done();
}

function copy_popper(done) {
    src([popper_js_path, popper_min_js_path, popper_js_map_path, popper_min_js_map_path], {since: lastRun(copy_popper)})
        .pipe(dest(static_js));
    done();
}

function copy_jquery(done) {
    src([jquery_js_path, jquery_min_js_path], {since: lastRun(copy_jquery)})
        .pipe(dest(static_js));
    done();
}

function copy_js_cookie(done) {
    src([js_cookie_min_js_path, js_cookie_min_mjs_path], {since: lastRun(copy_js_cookie)})
        .pipe(dest(static_js));
    done();
}

function add_footer_funDebug_api(done) {
    const add_text = '\nfundebug.init({apikey:"' + config.fundebug_api_key + '"});\n';
    src([fundebug_js_path], {since: lastRun(add_footer_funDebug_api)})
        .pipe(footer(add_text))
        .pipe(rename('fundebug.min.js'))
        .pipe(dest(static_js));
    done();
}

function watch_config_json() {
    return watch(['./config.json'],task(add_footer_funDebug_api));
}
