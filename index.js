// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;

      this.coffeMachineFanPowerOn = false;
      this.coffeFanIsOn = false;

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

      this.grinder1ConnectedToCointainer1 = false;
      this.grinder1ConnectedToCointainer2 = false;
      this.grinder1ConnectedToCointainer3 = false;

      this.grinderPower1 = false;
      this.grinderPower2 = false;
      this.grinderPower3 = false;

      this.grinderOn1 = false;
      this.grinderOn2 = false;
      this.grinderOn3 = false;
      
      this.waterTrayScalePower = false;
      this.waterFlushingFunction = false;
      this.timeToCleanFlush = false;
      this.trayIsFlushed = false;
      
      this.milkScaleOn = false;

      //amount of coffe beans in g
      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0; 
      
      this.lockForContainer1Outlet = false;
      this.lockForContainer2Outlet = false;
      this.lockForContainer3Outlet = false; 
      


//settings
      //amount of coffebeams per type of coffee in g
      //cup 3dl - 300ml
      this.coffeePerRegularBlackCoffee = 15;
      this.mochaPerCup = 26;
      this.lattePerCup = 30;

      //amount of milk in ml
      this.amountOfMilk = 0;
      this.warningIfLowOnMilk = 0;
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
  if(this.connectedToPower == true){
    this.grinderPower1 = true;
    this.grinderPower2 = true;
    this.grinderPower3 = true;
  }
}

checkIfGrindersAreConnectedToConatiners(){
  if(this.grinderPower1 == true){
    this.grinder1ConnectedToCointainer1 = true;
  }
  if(this.grinderPower2 == true){
    this.grinder1ConnectedToCointainer2 = true;
  }
  if(this.grinderPower3 == true){
    this.grinder1ConnectedToCointainer3 = true;
  }
}

dissableAndEnableGrinders(){ //////////////////////////////////fix
  if(this.grinderPower1 == true){
    if(this.grinder1ConnectedToCointainer1 == true){
      if(this.coffeeTypeRegular == true){
        this.grinderOn1 = true;
      } else {
        this.grinderOn1 = false;
      }
    }
  }
  if(this.grinderPower2 == true){
    if(this.grinder2ConnectedToCointainer2 == true){
      if(this.coffeeTypeLatte == true){
        this.grinderOn2 = true;
      } else {
        this.grinderOn2 = false;
      }
    }
  }
  if(this.grinderPower3 == true){
    if(this.grinder3ConnectedToCointainer3 == true){
      if(this.coffeeTypeMocha == true){
        this.grinderOn3 = true;
      } else {
        this.grinderOn3 = false;
      }
    }
  }
}
//scenario 4 end

//scenario 5 start
enableWaterFlushingFunction(){
  if(this.connectedToPower == true){
    this.waterTrayScalePower = true;
    if(this.connectedToWater == true){
      if(this.connectedToWater == true){
        if(this.waterTrayScalePower == true){
          this.waterFlushingFunction = true;
        }
      }
    }
  }
}

checkIfWaterTrayIsEmpty(amount){
  this.waterTrayScaleWeigh += amount;

  if(this.waterTrayScaleWeigh <= amount){
    return this.waterTrayScaleWeigh + "waterTrayScale doesnt weigh enough"
  } 
  if(this.waterTrayScaleWeigh > amount){
    startFlushCleaning();
    return this.waterTrayScaleWeigh + "waterTrayScale weigh more than expected and is flushed"
  }

}

startFlushCleaning(){
    this.timeToCleanFlush = true;
    if(this.timeToCleanFlush == true){
      this.trayIsFlushed = true;
    }
}
//scenario 5 end

//scenario 6 start
checkIfMilkScaleIsOn(){
  if(this.connectedToPower == true){
    this.milkScaleOn = true;
  }
}

weighAmountOfMilk(amount){
    this.amountOfMilk += amount;
    if(this.amountOfMilk >= 2000){
      return "there is atleast 2l milk left";
    }

}

weighAmountOfMilkWarning(amount){
  this.warningIfLowOnMilk += amount;
  if(this.warningIfLowOnMilk < 2000){
    return "there is less than 2l of milk left"
  }
}
//scenario 6 end

//scenario 7 start

//scenario 7 end


checkAmountOfMilkForMocha(){
      return this.amountOfMilk >= this.milkPerMocha;
}

checkAmountOfMilkForLatte(){
      return this.amountOfMilk >= this.milkPerLatte;
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


