Feature: coffe machine payment options coins
  As a costumer i want to be able to pay the machine
  with 5kr coins and 10kr coins to recive my coffee

Background: The machine is connected to power/water and waste and start button works
  Given that the machine is plugged in 
  And the water is available
  And the waste is available
  When the machine has power
  Then press the start "button" to start the machine
  And machine started
 
Scenario Outline: The customer pays with 5kr and 10kr coins for coffee
  Given there is enough ingrediens for the different coffees
  When the user inserts a <money1> kr coin
  And the user inserts a <money2> kr coin
  And the user inserts a <money3> kr coin
  Then check if there is enough money for the coffee
  And if right amount then activate button for chosen coffee
  And press one of the dispense buttons 
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
  |5      |5      |0      |"nothing"|
  |10     |0      |0      |"nothing"|
  |"annat"|5      |5      |"nothing"|
  |"annat"|10     |0      |"nothing"|
  |"annat"|5      |0      |"nothing"|


 
 