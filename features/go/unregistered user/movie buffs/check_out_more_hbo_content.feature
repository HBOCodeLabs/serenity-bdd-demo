# This Feature is too narrowly focused and can be generalized
@all @mobile @desktop
Feature: Check out the offerings HBO provides

  In order to find compelling content
  As a movie buff
  I want to see what HBO has to offer

  Scenario Outline: Exploring More HBO Content - <category>
    # The gherkin is where requirements in terms of business value are captured
    # Be careful not over-specify behavior here
    # gherkins are not meant to explore exhaustive edge cases
    # Nor are then meant to read like tests
    Given that <cinephile>, an unregistered user, wants to explore <category>
     When she looks for content starting with <alpha>
     Then she should see content that starts with <alpha>

    Examples:
      |      cinephile    | category | alpha |
      | SportsEnthusiast  | Sports   |   R   |
      | ComedyBuff        | Comedy   |   D   |




#@all @mobile @desktop  @guest @login
#Feature:  Sign into HBO

# name:           "signIn",
# description:    "Test sign in from main menu Sign In link",
