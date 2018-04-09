const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length);
    //seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop()

exports.config = {

    baseUrl: 'http://todomvc.com',

    //seleniumServerJar: seleniumJar,
    directConnect: true,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    disableChecks: true,

    // https://github.com/protractor-cucumber-framework/protractor-cucumber-framework#uncaught-exceptions
    ignoreUncaughtExceptions: true,

    framework: 'custom',
    // Performance note Serenity test framework provides a number of enhancements over cucumber-protractor-framework
    // The benefits incur a necessary performance penalty
    // see https://github.com/jan-molak/serenity-js/blob/master/book/overview/retrofitting.md
    frameworkPath: require.resolve('serenity-js'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register',
        //tags:       [ '~@manual' ]
    },

    capabilities: {
        browserName: 'chrome',
        // allows different specs to run in parallel.
        // If this is set to be true, specs will be sharded by file
        // (i.e. all files to be run by this set of capabilities will run in parallel).
        // Default is false.
        shardTestFiles: true,

        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        maxInstances: 2,
        chromeOptions: {
            args: [
                'disable-infobars',
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
                '--headless',            // Don't use headless for serenity, increases runtime for some reason
                '--window-size=1920,1080',
                //'--disable-gpu',
                // Without a remote debugging port, Google Chrome exits immediately.
                //'--remote-debugging-port=9222',
            ]
        }
    }
};
