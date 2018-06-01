# This Feature is too narrowly focused and can be generalized
@brand_all @mobile @desktop
Feature: Entering Activation Code for HBO Now Activation Client Enter Code

  In order to watch HBO NOW
  As a movie buff
  I want to see what HBO has to offer

  Scenario Outline: Exploring More HBO Content
    # The gherkin is where requirements in terms of business value are captured
    # Be careful not over-specify behavior here
    # gherkins are not meant to explore exhaustive edge cases
    # Nor are then meant to read like tests

    Given that John has retrieved an activation code
    When he enters the activation code in a second screen
    Then he should see the provider list

    Examples:
      |    cinephile      |    category   | alpha |
      | SportsEnthusiast  | Sports        |   R   |

#@all @mobile @desktop  @guest @login
#Feature:  Sign into HBO

# name:           "signIn",
# description:    "Test sign in from main menu Sign In link",
