exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    seleniumArgs: ['-browserTimeout=60'],

    // Spec patterns are relative to the location of this config.
    specs: [
        'test/e2e/*.js',
        'test/e2e/**/*.js',
    ],

    multiCapabilities: [{
        'browserName': 'phantomjs',
        'browserName': 'chrome',
        // 'browserName': 'firefox',
    }],


    // A base URL for your application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://localhost:8000',

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 10000
    },

    allScriptsTimeout: 10000,
};
