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
    // Performance note:  Protractor is faster but more error-prone compared to Serenity
    frameworkPath: require.resolve('protractor-cucumber-framework'),

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
                '--headless',
                '--window-size=1920,1080',
                // Required only when you are using chrome 58 or below
                //'--disable-gpu',
                // Without a remote debugging port, Google Chrome exits immediately.
                //'--remote-debugging-port=9222',
            ]
        }
    }
};
