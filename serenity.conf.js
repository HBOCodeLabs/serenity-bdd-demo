const
    glob         = require('glob'),
    protractor   = require.resolve('protractor'),
    node_modules = protractor.substring(0, protractor.lastIndexOf('node_modules') + 'node_modules'.length),
    seleniumJar  = glob.sync(`${node_modules}/protractor/**/selenium-server-standalone-*.jar`).pop();

exports.config = {

    baseUrl: 'http://todomvc.com',

    seleniumServerJar: seleniumJar,

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
        chromeOptions: {
            args: [
                'disable-infobars',
                // 'incognito',
                // 'disable-extensions',
                // 'show-fps-counter=true'
                //'--headless',
                //'--disable-gpu',
                // Without a remote debugging port, Google Chrome exits immediately.
                //'--remote-debugging-port=9222',
            ]
        }
    }
};
