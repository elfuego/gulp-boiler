'use strict';

import config from '../config/default';

import gulp     from 'gulp';
import notify   from 'gulp-notify';
import eslint     from 'gulp-eslint';
//import sourcemaps from 'gulp-sourcemaps';


export default () => {

	gulp.src([config.paths.source + '/js/default/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error', notify.onError( (err) => {
                const title = 'ES-LINT ERROR';
                let msg = err.message.replace(/(.\.js:)( .)/,"$1\n$2");
                return { 
                    icon: 'Icon.png', 
                    title: title, 
                    message: msg,
                    emitError: false
                };
            }));

}