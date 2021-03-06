Feature: coffe machine payment options card
  As a costumer i want to be able to pay the machine
  with blipping my creditcard to recive my coffee

Scenario Outline: The customer pays with creditcard blip function
  Given there is enough ingrediens for the different coffees
  And acces to internet for blip function to be active
  When costumer scans the <card>
  Then check if there is enough money for the coffee
  And if right amount then activate button for chosen coffee
  And press one of the dispense buttons 
  And the user recieves the <coffee> that was paid for.

  Examples:
  |card   |coffee   |
  |15     |"regular"|
  |20     |"mocha"  |
  |20     |"latte"  |
  |"annat"|"nothing"|
