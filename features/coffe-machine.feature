Feature: coffe machine inner basics
    As a coffee machine i want to be able to make
    three different types of coffee, clean myself, display my functions 
    and produce coffee for the buyer.

Scenario: check the basic functions for the coffe machine to work
  Given that the machine is plugged in 
  And the water is available
  And the waste is available
  When the machine has power
  Then press the start "button" to start the machine
  And machine started

Scenario: check the coffee machine coolers-functions
  Given that the coffe machine fan has power
  And that the cooler for the milk has power
  And that the coooler thermometer is connected to the cooler
  When the machine has power
  Then check if the fan is on
  And that the milk cooler is on
  And the check the cooler temperature
  
Scenario: check the coffee machine scales/weighs for the coffee machine
  Given that the machine is plugged in
  And that the scales/weighs have power
  When the scales/weighs weigh the amount of coffe
  And get the machine will return the amount of coffee that is inside
  Then return a warning when about to run low on coffee

Scenario: coffee machine blenders

Scenario: coffee machine cleaning functions

Scenario: amount of ingrediens per blackCoffee

Scenario: amount of ingrediens per MochaCoffee

Scenario: amount of ingrediens per CaffeLatte

Scenario: coffee machine water-boiler

Scenario: coffee machine milk-warmer

Scenario: coffee machine coffee dispensers

Scenario: coffee machine display-screen-coffees

Scenario: coffee machine display-screen-coffee1-blackCoffee

Scenario: coffee machine display-screen-coffee2-MochaCoffee

Scenario: coffee machine display-screen-coffee3-CaffeLatte

Scenario: coffee machine display-ingredients-status
