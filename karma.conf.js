/* License: MIT.
 * Copyright (C) 2016 Cosimo Meli.
 */

'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        autoWatch: true,
        reporters: ['dots', 'coverage'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/xregexp/xregexp-all.js',
            'angular-xregexp.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'tests.js'
        ],
        preprocessors: {
            'angular-xregexp.js': 'coverage'
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        }
    });
};