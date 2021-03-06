// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToInternet = false;
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
      this.waterScaleOn = false;
      this.waterFlushingFunction = false;
      this.timeToCleanFlush = false;
      this.trayIsFlushed = false;
      
      this.milkScaleOn = false;
      this.scaleForMilkHasPower = false;

      //amount of coffe beans in g
      this.amoutOfCoffeContainter1 = 0;
      this.amoutOfCoffeContainter2 = 0;
      this.amoutOfCoffeContainter3 = 0; 

      this.ingredientsFound = false;
      this.confirmation = false;
//settings
      //amount of coffebeams per type of coffee in g
      //cup 3dl - 300ml
      this.blackCoffeePerCup = 15;
      this.mochaPerCup = 26;
      this.lattePerCup = 30;

      //amount of milk in ml
      this.amountOfMilk = 0;
      this.warningIfLowOnMilk = 0;
      this.noMilk = 0;
      this.milkPerMocha = 110;
      this.milkPerLatte = 200;

      this.coffeeTypeRegular = false;
      this.coffeeTypeLatte = false;
      this.coffeeTypeMocha = false;
      
      this.maxMilkCoolerTemp = 6;
      this.waterTrayScaleWeigh = 0;

      //300ml
      this.AmountOfWaterForBlackCoffee = 300;

      //price per coffee
      this.insertedMoney = 0;
      this.blackCoffee = 15;
      this.caffeeLatte = 20;
      this.caffeeMocha = 20;

      this.coffeeButton1 = false;
      this.coffeeButton2 = false;
      this.coffeeButton3 = false;

      this.coffeeButtonPressed1 = false;
      this.coffeeButtonPressed2 = false;
      this.coffeeButtonPressed3 = false;

      this.dispenseCoffee = false;
    
    }
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
    return this.coolerForMilkTempOk = false;
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

fillCoffeeContainer1(amount){
  this.amoutOfCoffeContainter1 += amount;

}
fillCoffeeContainer2(amount){
  this.amoutOfCoffeContainter2 += amount;
}

fillCoffeeContainer3(amount){
  this.amoutOfCoffeContainter3 += amount;
}

checkIfContainer1HasEnoughCoffee(amount){
  if(this.amoutOfCoffeContainter1 >= amount){
    return "There is enough coffe in container 1";
  } else {
    return "The amount of coffe is getting low";
  }

}

checkIfContainer2HasEnoughCoffee(amount){
  if(this.amoutOfCoffeContainter2 >= amount){
    return "There is enough coffe in container 2";
  } else{
    return "The amount of coffe in container 2 is getting low";
  }
}

checkIfContainer3HasEnoughCoffee(amount){
  if(this.amoutOfCoffeContainter3 >= amount){
    return this.amoutOfCoffeContainter3 + "There is enough coffe in container 3";
  } else {
    return "The amount of coffe in container 3 is getting low";
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

dissableAndEnableGrinders(){ 
  if(this.grinderPower1 == true){
    if(this.grinder1ConnectedToCointainer1 == true){
      this.coffeeTypeRegular = true;
      if(this.coffeeTypeRegular == true){
        this.grinderOn1 = true;
      }
    }
  }
  if(this.grinderPower2 == true){
    if(this.grinder2ConnectedToCointainer2 == true){
      this.coffeeTypeLatte = true;
      if(this.coffeeTypeLatte == true){
        this.grinderOn2 = true;
      }
    }
  }
  if(this.grinderPower3 == true){
    if(this.grinder3ConnectedToCointainer3 == true){
      this.coffeeTypeMocha = true;
      if(this.coffeeTypeMocha == true){
        this.grinderOn3 = true;
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
        if(this.waterTrayScalePower == true){
          this.waterFlushingFunction = true;
          this.waterScaleOn = true;
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
checkIfmilkScaleHasPower(){
  if(this.connectedToPower == true){
    this.scaleForMilkHasPower = true;
  }
}

checkIfMilkScaleIsOn(){
  if(this.scaleForMilkHasPower == true){
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
checkIfEnoughBlackCoffeeForACup() {
  return this.amoutOfCoffeContainter1 >= this.blackCoffeePerCup;
}

checkIfEnoughMochaForACUP(){
  return this.amoutOfCoffeContainter2 >= this.mochaPerCup;
}

checkIfEnoughLatteCoffeForACup(){
  return this.amoutOfCoffeContainter3 >= this.lattePerCup;
}

checkAmountOfMilkForMocha(){
  return this.amountOfMilk >= this.milkPerMocha;
}

checkAmountOfMilkForLatte(){
      return this.amountOfMilk >= this.milkPerLatte;
}

ingredientsWeLookedForAreFound(){
  this.ingredientsFound = true;
}

confirmIngredientsAreFound(){
  if(this.ingredientsFound == true){
    this.confirmation = true;
  }
}


//scenario 7 end

//payment feature start

insertMoney(inserted) {
  if (typeof inserted !== 'number') {
    throw (new Error('You must insert money not ' + nonMoney));
  }
  this.insertedMoney += inserted;
}

checkMoney(money){
  this.insertedMoney += money;
}

checkAmountOfMoney(){
  return this.blackCoffee <= this.insertedMoney;
}
checkAmountOfMoney2(){
  return this.caffeeLatte <= this.insertedMoney;
}
coffeeButtons(){
  this.coffeeButton1 = true;
  this.coffeeButton2 = true;
  this.coffeeButton3 = true;
}
coffeeButtonPress(){
  if(this.coffeeButton1 == true){
    this.coffeeButtonPressed1 = true;
  }
  if(this.coffeeButton2 == true){
    this.coffeeButtonPressed2 = true;
  }
  if(this.coffeeButton3 == true){
    this.coffeeButtonPressed3 = true;
  }
}

rightTypeOfCoffee(){
  if(this.insertedMoney >= this.blackCoffee){
    return "here is your coffee"
  }
  if(this.insertedMoney >= this.caffeeLatte){
    return "here is your coffee"
  }
  if(this.insertedMoney >= this.caffeeLatte){
    return "here is your coffee"
  }
}
//payment feature end

//paymeny card feature start

pluggedInToInternet(){
  if(this.connectedToPower == true){
  this.connectedToInternet = true;
  }
}
//paymeny card feature end
}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;


