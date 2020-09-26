/// <binding />
const { task, src, dest, series, watch } = require("gulp");
var sass = require("gulp-sass");
var sourcemap = require("gulp-sourcemaps")

task("style", function () {
    return src("Content/SASS/**/*.scss")
        .pipe(sourcemap.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: "compressed"
        }))
        .on("error", console.error.bind(console))
        .pipe(sourcemap.write('./'))
        .pipe(dest("./Content/CSS/"))

});

//task("default", series("style"));

task("watch", series("style"), function () {
    watch("Content/SASS/**/*.scss",["style"]);
});