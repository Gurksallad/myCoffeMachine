// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;

      this.coffeMachineFanPowerOn = false;
      this.coffeFanIsOn = true;

      this.coolerForMilk = false;
      this.coolerPowerOn = false;
      this.coolerForMilkTempOk = false;
      this.milkCoolerTempOn = false;

      this.machineIsOn = false;

      this.scaleForContainer1 = false;
      this.scaleForContainer2 = false;
      this.scaleForContainer3 = false;

      this.scaleForContainerWeighs1 = false;
      this.scaleForContainerWeighs2 = false;
      this.scaleForContainerWeighs3 = false;
      
      this.grinderPower1 = false;
      this.grinderPower2 = false;
      this.grinderPower3 = false;

      //amount of coffe beans in g
      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0; 
      
      this.lockForContainer1Outlet = false;
      this.lockForContainer2Outlet = false;
      this.lockForContainer3Outlet = false; 
      
      this.flushWaterTray = false;
      this.trayIsFlushed = false;

//settings
      //amount of coffebeams per type of coffee in g
      //cup 3dl - 300ml
      this.coffeePerRegularBlackCoffee = 15;
      this.mochaPerCup = 26;
      this.lattePerCup = 30;

      //amount of milk in ml
      this.amountOfMilk = 0;
      this.milkPerMocha = 110;
      this.milkPerLatte = 200;

      this.coffeeTypeRegular = false;
      this.coffeeTypeLatte = false;
      this.coffeeTypeMocha = false;
      
      this.maxMilkCoolerTemp = 6;
      this.waterTrayScaleWeigh = 0;


    }
    //maintenance
    //scenario 1 start
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

    pressStartButton() {
      if(this.connectedToPower == true) {
        this.machineIsOn = true;
      }
    }
//scenario 1 end
//scenario 2 start
    machineFanConnected(){
      if(this.connectedToPower == true){
        this.coffeFanIsOn = true;
        this.coffeMachineFanPowerOn = true;
      }
    }

    milkCoolerChecker(){
      if(this.connectedToPower == true){
        this.coolerForMilk = true;
        this.coolerPowerOn = true;
        this.milkCoolerTempOn = true;
      }
    }

    checkMilkCoolerTemp(temp){
      if(this.coolerForMilkTempOk <= temp){
        return this.coolerForMilkTempOk = true;
      }else{
        return this.coolerForMilkTempOk;
      }
    }
//scenario 2 end

//scenario 3 start

checkIfScalersHavePower(){
  if(this.connectedToPower == true){
  this.scaleForContainer1 = true;
  this.scaleForContainer2 = true;
  this.scaleForContainer3 = true;
  }
}

scaleWeighCoffeeInContainers1(){
  if(this.scaleForContainer1 == true){
    this.scaleForContainerWeighs1 = true;
    if(this.scaleForContainerWeighs1 == true){
      return this.amoutOfCoffeContainter1;
    }
  }
}

scaleWeighCoffeeInContainers2(){
  if(this.scaleForContainer2 == true){
    this.scaleForContainerWeighs2 = true;
    if(this.scaleForContainerWeighs2 == true){
      return this.amoutOfCoffeContainter2;
    }
  }
}
scaleWeighCoffeeInContainers3(){
  if(this.scaleForContainer3 == true){
    this.scaleForContainerWeighs3 = true;
    if(this.scaleForContainerWeighs3 == true){
      return this.amoutOfCoffeContainter3;
    }
  }
}

checkIfContainer1HasEnoughCoffee(amount){
  this.amoutOfCoffeContainter1 += amount;
  
  if(this.amoutOfCoffeContainter1 >= amount){
    return "There is enough coffe in container 1"
  } else if(this.amoutOfCoffeContainter1 < amount){
    return "The amount of coffe is getting low"
  }

}

checkIfContainer2HasEnoughCoffee(amount){
  this.amoutOfCoffeContainter2 += amount;

  if(this.amoutOfCoffeContainter2 >= amount){
    return "There is enough coffe in container 2"
  } else if(this.amoutOfCoffeContainter2 < amount){
    return "The amount of coffe in container 2 is getting low"
  }
}

checkIfContainer3HasEnoughCoffee(amount){
  this.amoutOfCoffeContainter3 += amount; 

  if(this.amoutOfCoffeContainter3 >= amount){
    return "There is enough coffe in container 3"
  } else if(this.amoutOfCoffeContainter3 < amount){
    return "The amount of coffe in container 3 is getting low"
  }
}
//scenario 3 end

//scenario 4 start
checkIfBeanGrindersHavePower(){
  if(this.pluggedInToPower == true){
    this.grinderPower1 = true;
    this.grinderPower2 = true;
    this.grinderPower3 = true;
  }
}
//scenario 4 end
    checkAmountOfMilkForMocha(){
      return this.amountOfMilk >= this.milkPerMocha;
    }

    checkAmountOfMilkForLatte(){
      return this.amountOfMilk >= this.milkPerLatte;
    }

    fillWithMilk(amount){
      this.amountOfMilk += amount;
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


