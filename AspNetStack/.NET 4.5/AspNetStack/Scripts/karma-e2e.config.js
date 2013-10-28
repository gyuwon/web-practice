module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'Angular/*.e2e.js'
        ],
        autoWatch: false,
        browsers: ['Chrome'],
        frameworks: ['ng-scenario'],
        singleRun: true,
        proxies: {
            '/': 'http://localhost:1351/'
        },
        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'
        ],
        junitReporter: {
            outputFiles: 'test_out/e2e.xml',
            suite: 'e2e'
        }
    });
};
