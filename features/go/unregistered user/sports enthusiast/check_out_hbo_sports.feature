Feature: Check out the offerings HBO Sports provides

  In order to find compelling sports content
  As a sports enthusiast
  I want to see what HBO has to offer

  Scenario: Exploring HBO Sports
    # There are a couple anti-patterns below the gherkin is not where test cases belong
    # The gherkin is where requirements in terms of business value are captured
    Given that SportsEnthusiast, an unregistered user, wants to explore Sports
     # specifying the actual letter in the gherkin is an anti-pattern
     When she scrolls alphabetically using R
     # The content text below is also an anti-pattern
     Then she should see Real Sports
      And she should not see NFL
