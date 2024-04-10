Feature: End to end ecommerce validation

    @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to the cart
    Then Validate the total prices
    Then Select the country submit and verify the success message

    @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |name     | gender |
    |Veronica | Female |
    Then Validate the form behavior 
    Then open the shop page