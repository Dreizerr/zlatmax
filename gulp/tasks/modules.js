import GulpUglify from "gulp-uglify";

export const modules = () => {
  return app.gulp
    .src(app.path.src.jsModules)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS-MODULES>",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, GulpUglify()))
    .pipe(app.gulp.dest(app.path.build.jsModules))
    .pipe(app.plugins.browsersync.stream());
    //  
};
