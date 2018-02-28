Feature: Check out the offerings HBO Sports provides

  In order to find compelling sports content
  As a sports enthusiast
  I want to see what HBO has to offer

  Scenario: Exploring HBO Sports

    Given that SportsEnthusiast, a non-registered user, wants to explore Sports
    When she scrolls alphabetically using R
    Then she should see Real Sports
    And she should not see NFL
