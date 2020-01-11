// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;
      this.coffeMachineFan = false;
      this.coolerForMilk = false;

      this.amountOfMilk = 0;
      this.milkPerMocha = 10;
      this.milkPerLatte = 30;

      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0;

      this.coffeePerRegularBlackCoffee = 13;
      this.mochaPerCup = 10;
      this.lattePerCup = 10;

      this.coffeeTypeRegular
      this.coffeeTypeLatte
      this.coffeeTypeMocha
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

    machineFanOn(){
      if(this.connectedToPower == true){
        this.machineFanOn = true;
      }
    }

    checkAmountOfMilkForMocha(){
      return this.amountOfMilk >= this.milkPerMocha;
    }

    checkAmountOfMilkForLatte(){
      return this.amountOfMilk >= this.milkPerLatte;
    }

    fillWithMilk(amount){
      this.amountOfMilk += amount;
    }

    milkCooler(){
      if(this.connectedToPower == true){
        this.coolerForMilk = true;
      }
    }

    mochaCoffeeAmount(amount){
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

    fillContainer2WithCoffee(mochaCoffee) {
      this.amoutOfCoffeContainter2 += mochaCoffee;
    }

    fillContainer3WithCoffee(cafeLatteCoffee) {
      this.amoutOfCoffeContainter3 += cafeLatteCoffee;
    }
    
    checkIfEnoughBlackCoffeeForACup() {
      return this.amoutOfCoffeContainter1 >= this.coffeePerRegularBlackCoffee;
    }

    checkIfEnoughMochaForACUP(){
      return this.amoutOfCoffeContainter2 >= this.mochaPerCup;
    }

    checkIfEnoughLatteCoffeForACup(){
      return this.amoutOfCoffeContainter3 >= this.lattePerCup;
    }

  }
  
  // Export the CoffeeMachine class
  module.exports = CoffeeMachine;