Feature: coffe machine inner basics
    As a coffee machine i want to be able to make
    three different types of coffee, clean myself, display my functions 
    and produce coffee for the buyer.

Scenario: basic functions for the coffe machine to work
  Given that the machine is plugged in 
  And the water is available
  And the waste is available
  When the machine is has power
  Then press start "button"
  And the machine is on

Scenario: coffee machine coolers-functions
  Given that the coffee machines fan is connected
  And that the cooler for the milk is connected
  And that the cooler thermometer is connected to cooler
  When machine is started
  Then check if the fan is on
  And that the cooler is on
  And the temperature is at most 7 degrees
  
Scenario: coffee machine scales/weighs for blender

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
