/*
 * Copyright (c) 2013 Home Box Office, Inc. as an unpublished
 * work. Neither this material nor any portion hereof may be copied or
 * distributed without the express written consent of Home Box Office, Inc.
 *
 * This material also contains proprietary and confidential information
 * of Home Box Office, Inc. and its suppliers, and may not be used by or
 * disclosed to any person, in whole or in part, without the prior written
 * consent of Home Box Office, Inc.
 */

"use strict";

// this script sets up node REPL for automation.
// launch node with "node <thisscript>"
// it will setup bunch of variables for client automation.
// that you can use inside node REPL.

var repl         = require("repl");
var _            = require("underscore");
var Promise      = require("bluebird");
var path         = require("path");

var hadronRoot   = "/software/dp/Hadron";

var automation   = require(path.join(hadronRoot, "build_env/server/atlasserver/remoteplugins/automation/Automation"));
var util         = require(path.join(hadronRoot, "test/autoscripts/util"));
var autoUtils    = require(path.join(hadronRoot, "build_env/server/atlasserver/remoteplugins/automation/autoUtils"));

module.exports = function (log4js, scriptArgs) {
    var logger = log4js.getLogger("automation shell");

    var recording = false;
    var interactiveMode = false;
    var shell;
    var updatePrompt = function () {
        var promptString;
        if (recording) {
            promptString = "Recording >";
        } else if (interactiveMode) {
            promptString = "KeyPress >";
        } else {
            promptString = "Shell >";
        }

        if (shell.setPrompt) {
            shell.setPrompt(promptString);
        } else {
            shell.prompt = promptString;
        }
    };

    console.log("inside shell v1.0");
    return automation.connectToGo().then(function (g) {
        console.log("connected!");
        process.stdin.setEncoding("utf8");
        var resolver = Promise.pending();
        var quit = function () {
            resolver.resolve("shell session ended");
        };

        var consoleErrorLogger = logger.error.bind(logger);
        var consoleInfoLogger = logger.info.bind(logger);

        g.on("error", consoleErrorLogger);
        g.on("connectionError", consoleErrorLogger);

        g.on("goclient-objectlog", function (data) {
            // to state transitions on you can add a quick
            // entry in your code and this automation script will
            // print it on console. You can add something like:
            //   this._debugHistory("HeapSize = " + Performance.singleton.getHeapSize());
            // (this) object must be disposable.
            consoleInfoLogger(data);
        });

        var showHelp = function () {
            var message = "";
                message += "-----------------------------------------------------------------------\n";
                message += "Shell Mode: some of the useful context variables/functions available:  \n";
                message += "-----------------------------------------------------------------------\n";
                contextVariables.forEach(function (command) {
                    message += util.prePad(command.name, 20, " ") + ":   (" + typeof command.value + ") " + command.description + "\n";
                });
            message += "-----------------------------------------------------------------------\n";
            message += "Hit Ctrl-C to end the session\n";
            message += "-----------------------------------------------------------------------\n";
            console.log(message);
        };

        var contextVariables = [
            { name: "g",             description: "goClient",                      value: g },
            { name: "au",            description: "autoUtils",                     value: autoUtils },
            { name: "help",          description: "help",                          value: showHelp },
            { name: "quit",          description: "quit",                          value: quit },
        ];

        // returns context with pre set variable for use in REPL
        var setupContext = function (context) {
            contextVariables.forEach(function (command) {
                context[command.name] = command.value;
            });
            return context;
        };

        showHelp();
        shell = repl.start({
            prompt: "shell >",
            terminal: true,
        });
        setupContext(shell.context);
        shell.on("exit", function () {
            console.log("in r.on(exit)");
            resolver.resolve("shell session ended");
        });
        updatePrompt();
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
        }
        return resolver.promise;
    });
};

if (module.parent === null) {
    console.log("direct mode");
    module.exports(require("log4js"));
} else {
    console.log("indirect mode");
}
