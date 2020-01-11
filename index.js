// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;
      this.coffeMachineFan = false;
      this.coolerForMilk = false;
      this.coolerForMilkTempOk = false;

      this.milkCoolerTemp = 0;

      this.amountOfMilk = 0;
      this.milkPerMocha = 10;
      this.milkPerLatte = 30;

      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0;

      this.coffeePerRegularBlackCoffee = 13;
      this.mochaPerCup = 10;
      this.lattePerCup = 10;

      this.coffeeTypeRegular = false;
      this.coffeeTypeLatte = false;
      this.coffeeTypeMocha = false;

      this.lockForContainer1Outlet = false;
      this.lockForContainer2Outlet = false;
      this.lockForContainer3Outlet = false;

      this.waterTrayScaleWeigh = 0;
      this.flushWaterTray = false;
      this.trayIsFlushed = false;

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

    milkCooler(temp){
      if(this.connectedToPower == true){
        this.coolerForMilk = true;
        if(this.coolerForMilk == true){
          this.milkCoolerTemp += temp;
          if(this.milkCoolerTemp <= temp){
            this.coolerForMilkTempOk = true;
          }
        }
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

    chooseRegularCoffee(){
      this.coffeeTypeRegular = true;

    }

    chooseLatteCoffee(){
      this.coffeeTypeLatte = true;
    }

    chooseMochaCoffee(){
      this.coffeeTypeMocha = true;
    }

    containerLockToOutlet1(){
      if(this.chooseRegularCoffee == true){
        this.lockForContainer1Outlet = true;
      }
    }

    containerLockToOutlet2(){
      if(this.chooseLatteCoffee == true){
        this.lockForContainer2Outlet = true;
      }
    }

    containerLockToOutlet3(){
      if(this.chooseMochaCoffee == true){
        this.lockForContainer3Outlet = true;
      }
    }

    checkIfWaterTrayIsEmpty(amount){
      this.waterTrayScaleWeigh += amount;
    }

    startFlushingWaterTray(){
      if(this.connectedToWater == true){
        if(this.connectedToPower == true){
          if(this.connectedToWaste == true){
            this.flushWaterTray = true;
            if(this.flushWaterTray == true){
              this.waterTrayScaleWeigh = 0;
            }
          }
        }
      }
    }

    emptyWaterTrayFromWaste(){
      if(this.waterTrayScaleWeigh >= 15){
        return this.flushWaterTray;
      }
    }

    checkIfFlushed(){
      if(this.flushWaterTray == true){
        if(this.waterTrayScaleWeigh == 0){
          this.trayIsFlushed = true;
        }
      }
    }

  }
 
  
 
  // Export the CoffeeMachine class
  module.exports = CoffeeMachine;


