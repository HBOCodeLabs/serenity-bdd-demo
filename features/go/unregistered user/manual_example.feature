Feature: Demonstrate specifying manual tests

  In order track progress converting manual tests to automated tests
  As a tester
  I want to have clear visibility which tests are automated and which are still manual

  @manual
  Scenario: Load the Foo component in the Bar page.

    Given a tester
    Then Verify the brandname is displayed.
    And Verify what text is displayed as brandname.
