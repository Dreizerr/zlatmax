import del from "del";
import gulpZip from "gulp-zip";

export const zip = () => {
  del(`../${app.path.rootFolder}.zip`);
  return app.gulp
    .src(`./dist/**/*`)

    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "ZIP",
          message: "Error <%= error.message %>",
        })
      )
    )
    .pipe(gulpZip(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest(`../${app.path.rootFolder}`));
};
