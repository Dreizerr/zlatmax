import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoPrefixer from "gulp-autoprefixer";
import GulpCleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@images\//g, "../images/"))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoPrefixer({
            grid: true,
            overrideBrowserlist: ["latest 3 versions"],
            cascade: true,
          })
        )
      )
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp",
          })
        )
      )
      // .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.css)))
      .pipe(app.plugins.if(app.isBuild, GulpCleanCss()))
      .pipe(
        app.plugins.rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
