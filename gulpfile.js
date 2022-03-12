const { src, dest, series, parallel, watch } = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");

//编译、合并、压缩less文件
const buildLess = (cb) => {
  return src(["src/less/**/common.less", "src/less/**/*.less"])
    .pipe(concat("style.less"))
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("assets/css"));
};

//文件监听
const auto = (cb) => {
  watch("src/assets/less/**/*.less", buildLess);
};

//生产环境构建
exports.build = buildLess;
//开发环境构建
exports.dev = auto;
