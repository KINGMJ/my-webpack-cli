const { src, dest, series, parallel, watch } = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

//编译、合并、压缩less文件
const buildLess = (cb) => {
  return src(["src/less/**/wordpress.less", "src/assets/less/**/*.less"])
    .pipe(concat("style.less"))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("src/assets/css"));
};

//合并压缩后的css文件
const buildCss = (cb) => {
  return src(["src/assets/css/*.css"])
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("assets/css"));
};

//文件监听
const auto = (cb) => {
  watch("src/assets/less/**/*.less", series(buildLess, buildCss));
  watch("src/assets/css/*.css", buildCss);
};

//生产环境构建
exports.build = series(buildLess, buildCss);
//开发环境构建
exports.dev = auto;
