// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;

      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0;

      this.coffeePerRegularBlackCoffee = 13;
    }

    pluggedInToPower(){
      this.connectedToPower = true;
    }

    pluggedInToWater(){
      this.connectedToWater = true;
    }

    pluggedInToWaste(){
      if(this.connectedToWater == true){
      this.connectedToWaste = true;
      }
    }

    espressoCoffeeAmount(amount){
      this.amoutOfCoffeContainter1 += amount;

    }
    
    cafeLatteCoffeeAmount(amount){
      this.amoutOfCoffeContainter2 += amount;

    }

    blackCoffeAmount(amount){
      this.amoutOfCoffeContainter3 += amount;
    }
    
    fillContainer1WithCoffee(regularCoffe) {
      this.amoutOfCoffeContainter1 += regularCoffe;
    }

    fillContainer2WithCoffee(espressoCoffee) {
      this.amoutOfCoffeContainter2 += espressoCoffee;
    }

    fillContainer3WithCoffee(cafeLatteCoffee) {
      this.amoutOfCoffeContainter3 += cafeLatteCoffee;
    }
    
    checkIfEnoughBlackCoffeeForACup() {
      return this.amoutOfCoffeContainter1 >= this.coffeePerRegularBlackCoffee;
    }
  

  }
  
  // Export the CoffeeMachine class
  module.exports = CoffeeMachine;