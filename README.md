# Serenity/JS - BDD Demo

["High performing teams realise that test automation is a software engineering discipline. They invest time to design a test automation infrastructure that will be efficient and easy to maintain. "](https://johnfergusonsmart.com/wp-content/uploads/2017/07/bdd-at-the-heart-of-devops.pdf)
-- John Ferguson Smart


This project is a POC for incorporating BDD and current Best Practices being adopted by the automated test community.


The material is based on the official [Serenity/JS](https://github.com/jan-molak/serenity-js) tutorial: 
["From Scripts to Serenity"](http://serenity-js.org/from-scripts-to-serenity/readme.html).


**Serenity/JS is a next generation acceptance testing library, expanding the capabilities of 
[Angular Protractor](https://github.com/angular/protractor) to give you:**
* **the flexibility and expressiveness of the [Screenplay Pattern](http://serenity-js.org/design/screenplay-pattern.html)**,  
  _so that your test scenarios stay free of noise and focused on the business logic_,
  ![Screenplay Pattern Model](./documentation/screenplay_pattern_model.png)
* **the power and visibility of [Serenity BDD](http://serenity-bdd.info/#/documentation)
[narrative reports](http://serenity-bdd.info/docs/serenity/#_detailed_description_of_aggregation_reports)**,  
  _so that failure analysis and release readiness assessment become more efficient_,
* **an easy way to introduce and follow [SOLID design principles](https://en.wikipedia.org/wiki/SOLID_&#40;object-oriented_design&#41;)**,  
  _to keep your code simple, reusable and easy to extend_,
* **effortless integration with popular test automation tools like [Cucumber](http://serenity-js.org/cucumber/readme.html), [Mocha](http://serenity-js.org/mocha/readme.html) and Chai**,  
  _so that you can introduce it into your existing toolchain **today**,  
  with just a single, [one-line code change](http://serenity-js.org/overview/retrofitting.html)_!

Although Serenity/JS provides strong support for automating web tests using Protractor and Webdriver,
it works very effectively for non-web tests too! Those include tests that exercise web services or even call application code directly.

see also [serenity-js best practices](https://github.com/jan-molak/serenity-js/issues/5)


## IDE Bonus Features 
* [Code completion](./documentation/code-completion.mov)
* One-click code navagation

[![Code Completion](http://img.youtube.com/vi/p9qOk7veKzY/0.jpg)](http://www.youtube.com/watch?v=p9qOk7veKzY "Typescrypt/Serenity Code Completion")

Follow the image link above for a quick demo of code completion options.

## Next Steps
While Protractor works fine with Hadron and can even test devices (native) using [appium](http://appium.io/), it is optimized for Angular.
By implementing our own extension/plugin that leverages Hadron's auto-utils/automation we can gain many of the same benefits.

#### Sample list of API concepts that would be mapped to corresponding autmation/auto-util methods
* Open 
* Connect
* Locators
* etc.

## Prerequisites

To follow the tutorial, you'll need:

* [Node.js and NPM](https://nodejs.org/en/)
* A web browser, ideally [Chrome](https://www.google.co.uk/chrome/browser/desktop/)

You'll also need access to the [command line interface](https://en.wikipedia.org/wiki/Command-line_interface).

The below code listings, which look like this one below, mean "type `whoami` into the command line":

```
$> whoami
```

## Setup

First, make sure that you have the [required tools](http://serenity-js.org/overview/prerequisites.html) installed.
Next, [clone](https://help.github.com/articles/cloning-a-repository/) this project to your computer:

```
$> git clone https://github.com/HBOCodeLabs/serenity-bdd-demo.git
$> cd serenity-bdd-demo
```

Since Executable Specifications are Living Documentation that are shared across teams you will need to import them: 

To add them to your project issue the following git commands:
`git subtree add --prefix features/go https://github.com/HBOCodeLabs/living-documentation.git master --squash`

To update(choosing the appropriate version/branch/commit):
`git subtree pull --prefix features/go https://github.com/HBOCodeLabs/living-documentation.git master --squash`


Install the dependencies

```
$> nvm use
$> npm install
```

And make sure that you can execute the acceptance tests using
[Protractor](https://github.com/angular/protractor) and
[Cucumber](https://github.com/cucumber/cucumber-js):

- Fast testing using protractor-cucumber-framework and headless chrome
```
    $> npm test
```

- Robust execution and reporting using serenity-js
```
    $> npm run report
    $> npm run open-report
```

Calling the above command should give you output similar to the one below, notifying you of a pending step:

```
Feature: Add new items to the todo list

    In order to avoid having to remember things that need doing
    As a forgetful person
    I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Adding an item to a list with other items
  ✔ Given that SportsEnthusiast has a todo list containing Buy some cookies, Walk the dog
  ✔ When he adds Sign Up for HBO GO to his list
  ✔ Then his todo list should contain Buy some cookies, Walk the dog, Sign Up for HBO GO

Feature: Check out the offerings HBO Sports provides

    In order to find compelling sports content
    As a sports enthusiast
    I want to see what HBO has to offer

  Scenario: Exploring HBO Sports
  ✔ Given that SportsEnthusiast, a non-registered user, wants to explore Sports
  ✔ When she scrolls alphabetically using R
  ✔ Then she should see Real Sports

2 scenarios (2 passed)
6 steps (6 passed)
0m10.956s
```

Protractor supports sharding, headless chrome allows us to run tests in the cloud on large multi-cpu images:
```
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
                '--headless',
                '--window-size=1920,1080',
            ]
        }
    }
```


note: protractor requires setting `127.0.0.1       localhost` in your local hosts file

on mac use `sudo nano /etc/hosts` to edit

## That's it!

