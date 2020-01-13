Feature: coffe machine payment options
    As a coffee buyer i want to be able to pay the machine
    with 5kr coins and 10kr coins
    Except coins i want to be able to pay by bliping my creditcard
    to pay for my coffee to then recive my coffee
Scenario Outline: 
  Given that the machine has 3 options of coffes: Black coffee, caffe latte and mocha.
  And has a display screen to show these options
  When the display screen has power show 3 different options of coffee
  And when the user click/choose one option ask for insert a <money1> kr
  And the user inserts a <money2> kr 
  And the user inserts a <money3> kr 
  And the user can also use blip <cardMoney1> kr 
  Then display the chosen coffee button dispense button  
  And presses one of the chosen 3 <options1> buttons
  And presses one of the chosen 3 <options2> buttons
  And presses one of the chosen 3 <options3> buttons
  And show the dispense coffee "button"
  And the user recives the coffee

    Examples:
      | money1 | money2 | money3 |
      | 10     | 0      |0       |
      | 10     | 5      |0       |
      | 5      | 5      |5       |
      |"annat" | 5      |5       |
      |10      | "annat"|0       |

    Examples:
      |cardMoney1| 
      |10|
      |15|
      |"annat"|

    Examples:
      | options1 | options2| options3|
      |blackCoffe| denied  | denied  | 
      |denied    | Mocha   | denied  | 
      |denied    | denied  | Latte   | 
