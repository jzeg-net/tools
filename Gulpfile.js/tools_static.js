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

// Task
// 任务
task(terser_tools_js);
task(terser_survey_js);
task(terser_index_js);
task(terser_phone_number_js);
task(terser_photo_info_js);

task(cleanCSS_bootstrap_5_css);
task(cleanCSS_tools_css);
task(cleanCSS_survey_css);
task(cleanCSS_index_css);
task(cleanCSS_phone_number_css);
task(cleanCSS_photo_info_css);

task(watch_tools_static);

// Combined tasks
// 合并任务
task("terser",
    parallel(
        terser_tools_js,
        terser_survey_js,
        terser_index_js,
        terser_phone_number_js,
        terser_photo_info_js,
    )
);
task("cleanCSS",
    parallel(
        cleanCSS_bootstrap_5_css,
        cleanCSS_tools_css,
        cleanCSS_survey_css,
        cleanCSS_index_css,
        cleanCSS_phone_number_css,
        cleanCSS_photo_info_css,
    )
);
task("minimize_tools_static",
    parallel(
        "terser",
        "cleanCSS",
    )
);
task("build_static_tools",
    parallel(
        "minimize_tools_static",
    )
);

// Tasks function
// 任务函数
function terser_tools_js(done) {
    src([tools_js_path], {since: lastRun(terser_tools_js)})
        .pipe(dest(static_js));
    src([tools_js_path], {since: lastRun(terser_tools_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_survey_js(done) {
    src([survey_js_path], {since: lastRun(terser_survey_js)})
        .pipe(dest(static_js));
    src([survey_js_path], {since: lastRun(terser_survey_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_index_js(done) {
    src([index_js_path], {since: lastRun(terser_index_js)})
        .pipe(dest(static_js));
    src([index_js_path], {since: lastRun(terser_index_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_phone_number_js(done) {
    src([phone_number_js_path], {since: lastRun(terser_phone_number_js)})
        .pipe(dest(static_js));
    src([phone_number_js_path], {since: lastRun(terser_phone_number_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function terser_photo_info_js(done) {
    src([photo_info_js_path], {since: lastRun(terser_photo_info_js)})
        .pipe(dest(static_js));
    src([photo_info_js_path], {since: lastRun(terser_photo_info_js)})
        .pipe(terser())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_js));
    done();
}

function cleanCSS_bootstrap_5_css(done) {
    src([bootstrap_5_css_path], {since: lastRun(cleanCSS_bootstrap_5_css)})
        .pipe(dest(static_css));
    src([bootstrap_5_css_path], {since: lastRun(cleanCSS_bootstrap_5_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_tools_css(done) {
    src([tools_css_path], {since: lastRun(cleanCSS_tools_css)})
        .pipe(dest(static_css));
    src([tools_css_path], {since: lastRun(cleanCSS_tools_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_survey_css(done) {
    src([survey_css_path], {since: lastRun(cleanCSS_survey_css)})
        .pipe(dest(static_css));
    src([survey_css_path], {since: lastRun(cleanCSS_survey_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_index_css(done) {
    src([index_css_path], {since: lastRun(cleanCSS_index_css)})
        .pipe(dest(static_css));
    src([index_css_path], {since: lastRun(cleanCSS_index_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_phone_number_css(done) {
    src([phone_number_css_path], {since: lastRun(cleanCSS_phone_number_css)})
        .pipe(dest(static_css));
    src([phone_number_css_path], {since: lastRun(cleanCSS_phone_number_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function cleanCSS_photo_info_css(done) {
    src([photo_info_css_path], {since: lastRun(cleanCSS_photo_info_css)})
        .pipe(dest(static_css));
    src([photo_info_css_path], {since: lastRun(cleanCSS_photo_info_css)})
        .pipe(postcss([autoPreFixer()]))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(dest(static_css));
    done();
}

function watch_tools_static(done) {
    watch([tools_static_src_path + "**/*"], task("minimize_tools_static"));
    done();
}
