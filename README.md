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
```

Calling the above command should give you output similar to the one below, notifying you of a pending step:

```
Feature: Add new items to the todo list

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Adding an item to a list with other items
    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal

Warnings:

1) Scenario: Adding an item to a list with other items - features/add_new_items.feature:7
   Step: Given that James has a todo list containing Buy some cookies, Walk the dog - features/add_new_items.feature:8
   Step Definition: features/step_definitions/todo_user.steps.ts:3
   Message:
     Pending

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.002s
```

note: protractor requires setting `127.0.0.1       localhost` in your local hosts file

on mac use `sudo nano /etc/hosts` to edit

## That's it!

