const {series, parallel, task, src, dest} = require('gulp');
const cleanCSS = require("gulp-clean-css");
const autoPreFixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const terser = require("gulp-terser");
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const header = require('gulp-header');
const footer = require('gulp-footer');
const del = require("del");


//Static Files Path
const
    static_path = "./static/",
    static_js = static_path + "js/",
    static_css = static_path + "css/",

//bootstrap-toasts
    bootstrap_toasts_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.js",
    bootstrap_toasts_min_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.min.js",

//bootstrap-modal-js
    bootstrap_modal_js_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.js",
    bootstrap_modal_js_min_js_path = "./node_modules/bootstrap-modal-js/dist/bootstrap-modal-js.min.js",

//bs-custom-file-input
    bs_custom_file_input_dist_path = "./node_modules/bs-custom-file-input/dist/*",
    bs_custom_file_input_js_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js",
    bs_custom_file_input_js_map_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js.map",
    bs_custom_file_input_min_js_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.min.js",
    bs_custom_file_input_min_js_map_path = "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.min.js.map",

//lazyload
    lazyload_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.js",
    lazyload_min_js_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js",
    lazyload_min_js_map_path = "./node_modules/vanilla-lazyload/dist/lazyload.min.js.map",

//js.cookie.js
    js_cookie_min_js_path = "./node_modules/js-cookie/dist/js.cookie.min.js",
    js_cookie_min_mjs_path = "./node_modules/js-cookie/dist/js.cookie.min.mjs",

//jquery
    jquery_js_path = "./node_modules/jquery/dist/jquery.js",
    jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js",

// popper.js
    popper_js_path = "./node_modules/popper.js/dist/umd/popper.js",
    popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js",
    popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map",
    popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map",

// Bootstrap
    bootstrap_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js",
    bootstrap_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    bootstrap_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map",
    bootstrap_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map",
    bootstrap_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css",
    bootstrap_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css",
    bootstrap_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map",
    bootstrap_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map",

//vue
    vue_js_path = "./node_modules/vue/dist/vue.js",
    vue_min_js_path = "./node_modules/vue/dist/vue.min.js",

//fontawesome-free
    all_fontawesome_free_path = "./node_modules/@fortawesome/fontawesome-free/**/*",

//video.js
    video_js_path = "./node_modules/video.js/dist/video.js",
    video_min_js_path = "./node_modules/video.js/dist/video.min.js",
    video_lang_js_path = "./node_modules/video.js/dist/lang/zh-CN.js",
    video_css_path = "./node_modules/video.js/dist/video-js.css",
    video_min_css_path = "./node_modules/video.js/dist/video-js.min.css",

//viewerjs
    viewerjs_min_css_path = "./node_modules/viewerjs/dist/viewer.min.css",
    viewerjs_min_js_path = "./node_modules/viewerjs/dist/viewer.min.js",

//canvas-nest.js
    canvas_nest_umd_js_path = "./node_modules/canvas-nest.js/dist/canvas-nest.umd.js",

//bowser.js
    bowser_es5_js_path = "./node_modules/bowser/es5.js",
    bowser_src_path = "./node_modules/bowser/src/*",
    bowser_bundled_js_path = "./node_modules/bowser/bundled.js",

//lax.js
    lax_js_path = "./node_modules/lax.js/lib/lax.js",
    lax_min_js_path = "./node_modules/lax.js/lib/lax.min.js",

//FunDebug
    fundebug_js_path = "./node_modules/fundebug-javascript/release/fundebug." + "*.*.*" + ".min.js",

//dayjs.js
    concat_after_file_name = "day_js_with_locale.min.js",
    dayjs_min_js_path = "./node_modules/dayjs/dayjs.min.js",
    // dayjs_locale_zh_cn_js_path = "./node_modules/dayjs/locale/zh-cn.js",
    dayjs_locale_zh_cn_js_path = "./node_modules/dayjs/locale/zh-cn.js",

//animate.css
    animate_css_path = "./node_modules/animate.css/animate.css",
    animate_min_css_path = "./node_modules/animate.css/animate.min.css",

//hamburgers.css
    hamburgers_css_path = "./node_modules/hamburgers/dist/hamburgers.css",
    hamburgers_min_css_path = "./node_modules/hamburgers/dist/hamburgers.min.css",

//node-qrcode
    qrcode_build_path = "./node_modules/qrcode/build/*",
    qrcode_build_js_path = "./node_modules/qrcode/build/**.js",
    qrcode_build_map_path = "./node_modules/qrcode/build/**.map",
    qrcode_js_path = "./node_modules/qrcode/build/qrcode.js",
    qrcode_min_js_path = "./node_modules/qrcode/build/qrcode.min.js",
    qrcode_min_js_map_path = "./node_modules/qrcode/build/qrcode.min.js.map",
    qrcode_tosjis_js_path = "./node_modules/qrcode/build/qrcode.tosjis.js",
    qrcode_tosjis_min_js_path = "./node_modules/qrcode/build/qrcode.tosjis.min.js",
    qrcode_tosjis_min_js_map_path = "./node_modules/qrcode/build/qrcode.tosjis.min.js.map",

//moment.js
    moment_js_path = "./node_modules/moment/src/moment.js",
    moment_min_js_path = "./node_modules/moment/min/moment.min.js",
    moment_with_locales_js_path = "./node_modules/moment/min/moment-with-locales.js",
    moment_with_locales_min_js_path = "./node_modules/moment/min/moment-with-locales.min.js",

//clipboard.js
    clipboard_min_js_path = "./node_modules/clipboard/dist/clipboard.min.js",


    /** 文件路径 **/
//tools.js
    tools_js_path = "tools.js",
    tools_dest_js_path = "./",
//tools.css
    tools_css_path = "tools.css",
    tools_dest_css_path = "./",

//index.js
    index_js_path = "index.js",
    index_dest_js_path = "./",
//index.css
    index_css_path = "index.css",
    index_dest_css_path = "./",

//phone_number.js
    phone_number_js_path = "phone_number/js/phone_number.js",
    phone_number_dest_js_path = "phone_number/js",
//phone_number.css
    phone_number_css_path = "phone_number/css/phone_number.css",
    phone_number_dest_css_path = "phone_number/css",

//photo_info.js
    photo_info_js_path = "photo_info/js/photo_info.js",
    photo_info_dest_js_path = "photo_info/js",
//photo_info.css
    photo_info_css_path = "photo_info/css/photo_info.css",
    photo_info_dest_css_path = "photo_info/css";


task("terser_tools_js", terser_tools_js);
task("terser_index_js", terser_index_js);
task("terser_phone_number_js", terser_phone_number_js);
task("terser_photo_info_js", terser_photo_info_js);

task("cleanCSS_tools_css", cleanCSS_tools_css);
task("cleanCSS_index_css", cleanCSS_index_css);
task("cleanCSS_phone_number_css", cleanCSS_phone_number_css);
task("cleanCSS_photo_info_css", cleanCSS_photo_info_css);


task("copy_fontawesome_free", copy_fontawesome_free);
task("copy_js_cookie", copy_js_cookie);
task("copy_jquery", copy_jquery);
task("copy_popper", copy_popper);
task("copy_bootstrap", copy_bootstrap);
task("copy_animate_css", copy_animate_css);
task("copy_hamburgers_css", copy_hamburgers_css);
task("copy_bootstrap_modal_js", copy_bootstrap_modal_js);
task("copy_bs_custom_file_input", copy_bs_custom_file_input);
task("copy_dayjs", copy_dayjs);
task("copy_clipboard", copy_clipboard);
task("copy_qrcode", copy_qrcode);

task("copy_moment", copy_moment);
task("copy_lazyload", copy_lazyload);
task("copy_bootstrap_toasts_js", copy_bootstrap_toasts_js);
task("copy_vue", copy_vue);
task("copy_video", copy_video);
task("copy_viewerjs", copy_viewerjs);
task("copy_canvas_nest", copy_canvas_nest);
task("copy_bowser", copy_bowser);
task("copy_lax", copy_lax);


// task("add_header", add_fundebug_api);
task("add_footer", add_fundebug_api);

function terser_tools_js(done) {
    src([tools_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(tools_dest_js_path));
    done();
}

function terser_index_js(done) {
    src([index_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(index_dest_js_path));
    done();
}

function terser_phone_number_js(done) {
    src([phone_number_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(phone_number_dest_js_path));
    done();
}

function terser_photo_info_js(done) {
    src([photo_info_js_path])
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(photo_info_dest_js_path));
    done();
}

function cleanCSS_tools_css(done) {
    src([tools_css_path])
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(tools_dest_css_path));
    done();
}

function cleanCSS_index_css(done) {
    src([index_css_path])
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(index_dest_css_path));
    done();
}

function cleanCSS_phone_number_css(done) {
    src([phone_number_css_path])
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(phone_number_dest_css_path));
    done();
}

function cleanCSS_photo_info_css(done) {
    src([photo_info_css_path])
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(photo_info_dest_css_path));
    done();
}


function copy_fontawesome_free(done) {
    src([all_fontawesome_free_path])
        .pipe(dest(static_path + "/font/"));
    done();
}

function copy_lazyload(done) {
    src([lazyload_js_path, lazyload_min_js_path, lazyload_min_js_map_path]).pipe(dest(static_js));
    done();
}

function copy_bootstrap_modal_js(done) {
    src([bootstrap_modal_js_js_path, bootstrap_modal_js_min_js_path]).pipe(dest(static_js));
    done();
}

function copy_bs_custom_file_input(done) {
    src([bs_custom_file_input_dist_path])
        .pipe(dest(static_js));
    done();
}

function copy_moment(done) {
    src([moment_with_locales_js_path, moment_with_locales_min_js_path])
        .pipe(dest(static_js));
    done();
}

function copy_dayjs(done) {
    src([dayjs_min_js_path, dayjs_locale_zh_cn_js_path])
        .pipe(concat(concat_after_file_name))
        .pipe(dest(static_js));
    done();
}

function copy_clipboard(done) {
    src([clipboard_min_js_path])
        .pipe(dest(static_js));
    done();
}

function copy_qrcode(done) {
    // src([qrcode_js_path, qrcode_min_js_path, qrcode_min_js_map_path, qrcode_tosjis_js_path, qrcode_tosjis_min_js_path, qrcode_tosjis_min_js_map_path])
    // src([qrcode_build_js_path,qrcode_build_map_path])
    src([qrcode_build_path])
        .pipe(dest(static_js));
    done();
}

function copy_bootstrap(done) {
    src([bootstrap_js_path, bootstrap_min_js_path, bootstrap_js_map_path, bootstrap_min_js_map_path]).pipe(dest(static_js));
    src([bootstrap_css_path, bootstrap_min_css_path, bootstrap_css_map_path, bootstrap_min_css_map]).pipe(dest(static_css));
    done();
}

function copy_animate_css(done) {
    src([animate_css_path, animate_min_css_path])
        .pipe(dest(static_css));
    done();
}

function copy_hamburgers_css(done) {
    src([hamburgers_css_path, hamburgers_min_css_path])
        .pipe(dest(static_css));
    done();
}

function copy_popper(done) {
    src([popper_js_path, popper_min_js_path, popper_js_map_path, popper_min_js_map_path]).pipe(dest(static_js));
    done();
}

function copy_bootstrap_toasts_js(done) {
    src([bootstrap_toasts_js_path, bootstrap_toasts_min_js_path]).pipe(dest(static_js));
    done();
}

function copy_jquery(done) {
    src([jquery_js_path, jquery_min_js_path]).pipe(dest(static_js));
    done();
}

function copy_js_cookie(done) {
    src([js_cookie_min_js_path, js_cookie_min_mjs_path]).pipe(dest(static_js));
    done();
}

function copy_vue(done) {
    src([vue_js_path, vue_min_js_path]).pipe(dest(static_js));
    done();
}

function copy_video(done) {
    src([video_js_path, video_min_js_path]).pipe(dest(static_js));
    src([video_lang_js_path])
        .pipe(rename({
            prefix: "video."
        }))
        .pipe(dest(static_js));
    src([video_css_path, video_min_css_path]).pipe(dest(static_css));
    done();
}

function copy_viewerjs(done) {
    src([viewerjs_min_js_path]).pipe(dest(static_js));
    src([viewerjs_min_css_path]).pipe(dest(static_css));
    done();
}

function copy_canvas_nest(done) {
    src([canvas_nest_umd_js_path]).pipe(dest(static_js));
    done();
}

function copy_bowser(done) {
    src([bowser_es5_js_path, bowser_bundled_js_path])
        .pipe(dest(static_path + "/js/bowser/"));
    src([bowser_src_path])
        .pipe(dest(static_path + "/js/bowser/src"));
    done();
}

function copy_lax(done) {
    src([lax_js_path, lax_min_js_path]).pipe(dest(static_js));
    done();
}

function add_fundebug_api(done) {
    const add_text = '\nfundebug.init({apikey:"3d4b48db363609255fd0abb3cfa559ca84a7a4ca4ca8922fbd42d8d38e2c36a4"});\n';

    src([fundebug_js_path])
        .pipe(footer(add_text))
        .pipe(rename('fundebug.min.js'))
        .pipe(dest(static_js));
    done();
}
