# This Feature is too narrowly focused and can be generalized
Feature: Check out the offerings HBO provides

  In order to find compelling content
  As a movie buff
  I want to see what HBO has to offer

  Scenario Outline: Exploring More HBO Content - <category>
    # There are a couple anti-patterns below: the gherkin is not where test cases belong
    # The gherkin is where requirements in terms of business value are captured
    Given that <cinephile>, an unregistered user, wants to explore <category>
     # specifying the actual letter in the gherkin is an anti-pattern
     When she scrolls alphabetically using <alpha>
     # The content text below is also an anti-pattern
     Then she should see content that starts with <alpha>

    Examples:
      |      cinephile    | category | alpha |
      | SportsEnthusiast  | Sports   |   R   |
      | ComedyBuff        | Comedy   |   D   |

