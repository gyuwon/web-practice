module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'angular.js',
            'angular-*.js',
            'angular-mocks.js',
            'Angular/Step04.js',
            'Angular/Step04.spec.js'
        ],
        exclude: ['angular-scenario.js'],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        junitReporter: {
            outputFiles: 'test_out/e2e.xml',
            suite: 'unit'
        }
    });
};
