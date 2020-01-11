Feature:
    As a coffe machine i want to be able to
    make 3 different types of coffee.
    The different types of coffee will be:
    black coffee, caffe latte and espresso. 
    I as a coffe machine want to be able to clean myself.

Scenario Outline:
    Given that the machine is pluggen in
    And the water is available
    And that the machine has enough coffe beans in each different coffe container
    And enough stored milk for the different coffees.
    When type of coffee has been chosen
    Then the coffe will be emptied down in the propper outlet if no cup is placed coffe will be emptied in the water tray
    And if a certain amount of weight is in the water tray, flush it.
    And check if its flushed.