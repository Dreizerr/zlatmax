import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { svgIcons } from "./gulp/tasks/svgIcons.js";
import { zip } from "./gulp/tasks/zip.js";
import { modules } from "./gulp/tasks/modules.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, gulp.parallel(js, modules));
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.svgicons, svgIcons);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images, svgIcons, modules);

export const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
export const build = gulp.series(reset, mainTasks);
export const deployZip = gulp.series(reset, mainTasks, zip);

export { reset };
