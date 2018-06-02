Feature: Activate a CTV Device

  In order to watch HBO NOW
  As a connected TV User
  I need to activate my device

  Scenario: Enter a device code

    Given that John has retrieved an activation code
     When he enters the activation code in a second screen
     Then he should see the provider list
