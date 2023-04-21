import svgo from "gulp-svgo";

export const svgIcons = () => {
  return (
    app.gulp
      .src(app.path.src.svgicons)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SVGSPRITE",
            message: "Error <%= error.message %>",
          })
        )
      )
      // .pipe(
      //   svgsprite({
      //     mode: {
      //       stack: {
      //         sprite: `../icons/icons.svg`,
      //         example: false,
      //       },
      //     },
      //   })
      // )
      .pipe(app.plugins.newer(`${app.path.build.images}/icons/`))
      .pipe(svgo())
      .pipe(app.gulp.dest(`${app.path.build.images}/icons/`))
  );
};
