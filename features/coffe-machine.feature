Feature: coffe machine inner basics
  As a coffee machine i want to be able to make
  three different types of coffee, clean myself, display my functions 
  and produce coffee for the buyer.

Background: The machine is connected to power/water and waste and start button works
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
  Given that the scales/weighs have power
  When the scales/weighs have power weigh the amount of coffe in the containers
  And get the machine to return the amount of coffee that is inside containers
  Then return a warning when about to run low on coffee

Scenario: coffee machine bean grinder
 Given that the bean grinders have power
 When bean grinder are connected to containers
 Then enable/dissable grinders

Scenario: coffee machine waterTray functions
  Given that watertray scale has power
  When watertray scale is on
  Then if watertray weighs a certain amount of waste
  And find out if it needs to flush

Scenario: scale/weigh for milk for the coffee types
  Given that milk scale has power 
  When milk scale is on
  Then weigh if there is any milk
  And warn if amount of milk is getting low

Scenario: amount of ingrediens per blackCoffee
  Given that ingrediens excists
  When when ingrediens excistens are confirmed
  Then check if there is enough for a cup black coffee

Scenario: amount of ingrediens per MochaCoffee
  Given that ingrediens excists
  When when ingrediens excistens are confirmed
  Then check if there is enough for a cup Mocha

Scenario: amount of ingrediens per CaffeLatte
  Given that ingrediens excists
  When when ingrediens excistens are confirmed
  Then check if there is enough for a cup caffe Latte

Scenario: coffee machine water-boiler
  Given that the water boiler has power
  And is connected to the blender
  When coffee is orderd start boiling
  Then empty the water into the blender

Scenario: coffee machine milk-warmer
  Given that the water boiler has power
  And is connected to the blender
  When coffee is orderd start warming the milk
  Then empty the milk into the blender

Scenario: coffee machine coffee dispensers
  Given that the coffee of choise is made
  When the blender is full with the finished mix
  Then dispense the coffee from propper outlet

Scenario: When a coffee is chosen
  Given that the displayscreen has power
  When a choise is made
  Then dissable the others
  And add enable return button

Scenario: coffee machine display-screen-coffees
  Given the displayscreen has power
  When when the displayscreen is on
  Then display the different coffees
  And display their prices
  And enable the coffee types buttons

Scenario: coffee machine display-screen-coffee1-blackCoffee
  Given the black coffee choise is pressed
  When pressed display price again
  And wait for payment
  Then confirm payment
  And enable dispense button

Scenario: coffee machine display-screen-coffee2-MochaCoffee
  Given the mocha coffe choise is pressed
  When pressed display price again
  And wait for payment
  Then confirm payment
  And enable dispense button

Scenario: coffee machine display-screen-coffee3-CaffeLatte
  Given the coffee latte choise is pressed
  When pressed display price again
  And wait for payment
  Then confirm payment
  And enable dispense button

Scenario: coffee machine display-ingredients-status
  Given that the displayscreen has power
  When displayscreen is on
  Then show how much coffee is left per coffee type
