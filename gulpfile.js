/* eslint-env node, es2020 */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Gulp 4 build pipeline – Node 20 ready, usando Dart Sass.
 * 2025‑04 – sass‑lint removido (obsoleto). Caso deseje linting, migre para Stylelint.
 */

const { src, dest, watch, series, parallel } = require("gulp");

/*************** Global ***************/
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const cache = require("gulp-cached");
const flatten = require("gulp-flatten");
const plumber = require("gulp-plumber");
const log = require("fancy-log");
const colors = require("ansi-colors");
/*************** CSS ***************/
const postcss = require("gulp-postcss");
const cssnext = require("postcss-cssnext");
const dartSass = require("sass");
const gulpSass = require("gulp-sass")(dartSass);
const groupQueries = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
/*************** JS ***************/
const merge2 = require("merge2");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
/*************** HTML ***************/
const fileinclude = require("gulp-file-include");
const htmlBeautify = require("gulp-html-beautify");
/*************** Paths ***************/
const paths = require("./gulp.paths.json");

// -----------------------------------------------------------------------------
// Tratamento de erros (plumber)
// -----------------------------------------------------------------------------
function onError(err) {
    const message = (err.message || "").replace(
        "unknown path",
        err.fileName || ""
    );
    process.stdout.write("\x07"); // beep!
    log.error(colors.red(message));
    this.emit("end");
}

// -----------------------------------------------------------------------------
// BrowserSync
// -----------------------------------------------------------------------------
function sync(done) {
    browserSync.init({
        server: { baseDir: "./dist" },
        notify: false,
    });
    done();
}

function reload(done) {
    browserSync.reload();
    done();
}

// -----------------------------------------------------------------------------
// HTML
// -----------------------------------------------------------------------------
function html() {
    return src(paths.src.views.pages)
        .pipe(fileinclude({ prefix: "@@", basepath: "@file" }))
        .pipe(htmlBeautify({ indent_size: 2 }))
        .pipe(dest(paths.dest.views));
}

// -----------------------------------------------------------------------------
// Styles – Sass / PostCSS
// -----------------------------------------------------------------------------
function css() {
    return src(paths.src.css.files)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(
            gulpSass({ includePaths: paths.src.css.imports }).on(
                "error",
                gulpSass.logError
            )
        )
        .pipe(groupQueries())
        .pipe(postcss([cssnext({ browsers: ["last 10 versions"] })]))
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(concat("bundle.min.css"))
        .pipe(dest(paths.dest.css))
        .pipe(browserSync.stream());
}

// -----------------------------------------------------------------------------
// JavaScript
// -----------------------------------------------------------------------------
function js() {
    const vendor = src(paths.src.js.dependencies);
    const app = src(paths.src.js.files)
        .pipe(plumber({ errorHandler: onError }))
        .pipe(babel({ presets: ["@babel/preset-env"] }));

    return merge2(vendor, app)
        .pipe(uglify())
        .pipe(concat("bundle.min.js"))
        .pipe(dest(paths.dest.js));
}

// -----------------------------------------------------------------------------
// Images (ESM – import dinâmico)
// -----------------------------------------------------------------------------
async function images() {
    const imagemin = (await import("gulp-imagemin")).default;
    return src(paths.src.img)
        .pipe(cache("images"))
        .pipe(flatten())
        .pipe(imagemin())
        .pipe(dest(paths.dest.img));
}

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------
function fonts() {
    return src(paths.src.fonts).pipe(dest(paths.dest.fonts));
}

// -----------------------------------------------------------------------------
// Watchers
// -----------------------------------------------------------------------------
function watcher() {
    watch(paths.src.img, series(images, reload));
    watch(paths.src.js.files, series(js, reload));
    watch(paths.src.fonts, series(fonts, reload));
    watch(paths.src.css.all, series(css)); // stream já recarrega
    watch(paths.src.views.files, series(html, reload));
}

// -----------------------------------------------------------------------------
// Build & Default
// -----------------------------------------------------------------------------
const build = series(html, css, js, images, fonts);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.default = series(build, parallel(watcher, sync));
