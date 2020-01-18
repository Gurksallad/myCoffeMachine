Feature: coffe machine payment options
    As a costumer i want to be able to pay the machine
    with 5kr coins and 10kr coins
    If i dont have any coins i want to be able to pay with
    the blip function on my credit card

Background: The machine is connected to power/water and waste and start button works
  Given that the machine is plugged in 
  And the water is available
  And the waste is available
  When the machine has power
  Then press the start "button" to start the machine
  And machine started
 
  Scenario Outline: The customer pays with 5kr and 10kr coins for coffee
    Given there is enough ingrediens for regular coffee
    When the user inserts a <money1> kr coin
    And the user inserts a <money2> kr coin
    And the user inserts a <money3> kr coin
    And the amount is enough for the coffee
    Then presses the "dispense" button
    And the user recieves the <coffee> that was paid for.

    Examples:
    |money1 |money2 |money3 |coffee   |
    |10     |5      |0      |"regular"|
    |5      |5      |5      |"regular"|
    |"annat"|5      |0      |"regular"|
    |10     |5      |5      |"mocha"  |
    |10     |10     |0      |"mocha"  |
    |"annat"|10     |10     |"mocha"  |
    |10     |5      |5      |"latte"  |
    |10     |10     |0      |"latte"  |
    |"annat"|10     |10     |"latte"  |
    |5      |5      |0      |0        |
    |10     |0      |0      |0        |
    |"annat"|5      |5      |0        |
    |"annat"|10     |0      |0        |
    |"annat"|5      |0      |0        |
