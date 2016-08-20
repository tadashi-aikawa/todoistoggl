'use strict';
const gulp = require('gulp');
const watch = require('gulp-watch');
const electronServer = require('electron-connect').server;

gulp.task('electron-watch', function () {

    // Electronの起動
    const electron = electronServer.create({path: "./dist"});
    electron.start();
    gulp.watch(['dist/main.js'], electron.restart);
    gulp.watch(['dist/bundle.js', 'dist/index.html'], electron.reload);
});
