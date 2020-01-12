let CoffeeMachine = require('../index.js');
let myMachine;
let resultOfStartButton;
module.exports = function () {

//scenario basic functions for the coffe machine to work
    this.Given(/^that the machine is plugged in$/, function (){
        myMachine = new CoffeeMachine();
        myMachine.pluggedInToPower();
        assert.strictEqual(myMachine.connectedToPower, true, 'Expected the property pluggedInToPower to be true after calling the pluggedInToPower() method');
    });

    this.Given(/^the water is available$/, function () {
        myMachine.pluggedInToWater();
        assert.strictEqual(myMachine.connectedToWater, true, "Expected the property connectedToWater to be true after calling the pluggedInToWater() method.");
    });

    this.Given(/^the waste is available$/, function () {
        myMachine.pluggedInToWaste();
        assert.strictEqual(myMachine.connectedToWaste, true, "Expected the property connectedToWaste to be true after calling the pluggedInToWaste() method.");
    });

    this.When(/^the machine has power$/, function () {
        myMachine.pluggedInToPower();
        assert.strictEqual(myMachine.connectedToPower, true, 'Expected the property pluggedInToPower to be true after calling the pluggedInToPower() method');
    });
    
    this.Then(/^press the start "([^"]*)" to start the machine$/, function (buttonName) {
        if(buttonName === "button"){
            resultOfStartButton = myMachine.pressStartButton();
        }
        else{
            assert(false,"the only button on this machine should be the start button")
        }
      });

    this.When(/^machine started$/, function () {
        myMachine.pressStartButton();
        assert.strictEqual(myMachine.machineIsOn, true, 'Expected the property machineIsOn to be true after calling the pressStartButton() method');
    });
//scenario basic functions for the coffe machine to work

//scenario coffee machine coolers-functions starts
    this.Given(/^that the coffe machine fan has power$/, function () {
        myMachine.machineFanConnected();
        assert.strictEqual(myMachine.coffeMachineFanPowerOn, true, "Expected the property coffeMachineFan to be true after calling the machineFanOn() method.");
    });

    this.Given(/^that the cooler for the milk has power$/, function () {
        myMachine.milkCoolerChecker();
        assert.strictEqual(myMachine.coolerForMilk, true, "Expected the property coolerForMilk to be true after calling the milkCoolerChecker() method.");
    });

    this.Given(/^that the coooler thermometer is connected to the cooler$/, function () {
        myMachine.milkCoolerChecker();
        assert.strictEqual(myMachine.milkCoolerTempOn, true, "Expected the property milkCoolerTempOn to be true after calling the milkCoolerChecker() method.");
    });

    this.When(/^the cooler properties are connected$/, function () {
        myMachine.checkIfCoolerPropertiesAreConnected();
        assert.strictEqual(myMachine.allCoolersAreConnected, true, "Expected the property allCoolersAreConnected to check if all coolers are connected after calling the checkIfCoolerPropertiesAreConnected() method.");
      });
    this.Then(/^check if the fan is on$/, function () {
        myMachine.machineFanConnected();
        assert.strictEqual(myMachine.coffeFanIsOn, true, "Expected the property coffeFanIsOn to be true after calling the machineFanConnected() method.");
    });

    this.Then(/^that the milk cooler is on$/, function () {
        myMachine.milkCoolerChecker();
        assert.strictEqual(myMachine.coolerPowerOn, true, "Expected the property milkCoolerChecker to be true after calling the milkCoolerChecker() method.");
    });
      
    this.Then(/^the check the cooler temperature$/, function () {
        myMachine.checkMilkCoolerTemp(8);
        assert.isBelow(myMachine.maxMilkCoolerTemp, 8, "Expected the property maxMilkCoolerTemp to be at most 7 degrees after calling the milkCooler() method.");
    });
    //Scenario coffee machine coolers-functions ends

    //Scenario: coffee machine scales/weighs for blender starts
    this.Given(/^that the scales\/weighs have power$/, function () {
        myMachine.checkIfScalersHavePower();
        assert.strictEqual(myMachine.scaleForContainer1, true, 'Expected scaleForContainer1 to be true when calling checkIfScalersHavePower()');

        myMachine.checkIfScalersHavePower();
        assert.strictEqual(myMachine.scaleForContainer2, true, 'Expected scaleForContainer2 to be true when calling checkIfScalersHavePower()');

        myMachine.checkIfScalersHavePower();
        assert.strictEqual(myMachine.scaleForContainer3, true,'Expected scaleForContainer3 to be true when calling checkIfScalersHavePower()');
    });

    this.When(/^the scales\/weighs have power weigh the amount of coffe in the containers$/, function () {
        myMachine.scaleWeighCoffeeInContainers1();
        assert.equal(myMachine.amoutOfCoffeContainter1, 0, "Expected scaleForContainer1 to have no coffe weight from a new unpacked machine when calling scaleWeighCoffeeInContainers1()");

        myMachine.scaleWeighCoffeeInContainers2();
        assert.equal(myMachine.amoutOfCoffeContainter1, 0, "Expected scaleForContainer2 to have no coffe weight from a new unpacked machine when calling scaleWeighCoffeeInContainers2()");

        myMachine.scaleWeighCoffeeInContainers3();
        assert.equal(myMachine.amoutOfCoffeContainter1, 0, "Expected scaleForContainer3 to have no coffe weight from a new unpacked machine when calling scaleWeighCoffeeInContainers3()");
    });

    this.When(/^get the machine to return the amount of coffee that is inside containers$/, function (){
        myMachine.scaleWeighCoffeeInContainers1();
        assert.strictEqual(myMachine.scaleForContainerWeighs1, true, "Expected scaleForContainerWeighs1 return the weight when calling scaleWeighCoffeeInContainers1()");

        myMachine.scaleWeighCoffeeInContainers2();
        assert.strictEqual(myMachine.scaleForContainerWeighs2, true, "Expected scaleForContainerWeighs2 return the weight when calling scaleWeighCoffeeInContainers2()");

        myMachine.scaleWeighCoffeeInContainers3();
        assert.strictEqual(myMachine.scaleForContainerWeighs3, true, "Expected scaleForContainerWeighs3 return the weight when calling scaleWeighCoffeeInContainers3()");
    });

    this.Then(/^return a warning when about to run low on coffee$/, function () {
        myMachine.checkIfContainer1HasEnoughCoffee(5000);
        assert.isAtLeast(myMachine.amoutOfCoffeContainter1, 1000, 'amoutOfCoffeContainter1 has enough coffe in container1 when calling checkIfContainer1HasEnoughCoffee else its getting low');

        myMachine.checkIfContainer2HasEnoughCoffee(5000);
        assert.isAtLeast(myMachine.amoutOfCoffeContainter2, 1000, 'amoutOfCoffeContainter1 has enough coffe in container2 when calling checkIfContainer2HasEnoughCoffee else its getting low');

        myMachine.checkIfContainer3HasEnoughCoffee(5000);
        assert.isAtLeast(myMachine.amoutOfCoffeContainter3, 1000, 'amoutOfCoffeContainter3 has enough coffe in container3 when calling checkIfContainer2HasEnoughCoffee else its getting low');
    });
    //Scenario: coffee machine scales/weighs for blender ends

    //Scenario: coffee machine blenders starts

    this.Given(/^that the bean grinders have power$/, function () {
        myMachine.checkIfBeanGrindersHavePower();
        assert.strictEqual(myMachine.grinderPower1, true, 'Expect grinderPower1 to be true if calling the checkIfBeanGrindersHavePower()');
        assert.strictEqual(myMachine.grinderPower2, true, 'Expect grinderPower2 to be true if calling the checkIfBeanGrindersHavePower()');
        assert.strictEqual(myMachine.grinderPower3, true, 'Expect grinderPower3 to be true if calling the checkIfBeanGrindersHavePower()');
    });

    this.When(/^bean grinder are connected to containers$/, function () {
        myMachine.checkIfGrindersAreConnectedToConatiners();
        assert.strictEqual(myMachine.grinder1ConnectedToCointainer1, true, 'Expect grinder1ConnectedToCointainer1 to be true if calling the checkIfGrindersAreConnectedToConatiners()');
        assert.strictEqual(myMachine.grinder1ConnectedToCointainer2, true, 'Expect grinder1ConnectedToCointainer2 to be true if calling the checkIfGrindersAreConnectedToConatiners()');
        assert.strictEqual(myMachine.grinder1ConnectedToCointainer3, true, 'Expect grinder1ConnectedToCointainer3 to be true if calling the checkIfGrindersAreConnectedToConatiners()');
    });

    this.Then(/^enable\/dissable grinders$/, function () {

    });
    //Scenario: coffee machine blenders ends

    //Scenario: coffee machine waterTray functions starts 

    this.When(/^watertray scale has power$/, function () {
        myMachine.enableWaterFlushingFunction();
        assert.strictEqual(myMachine.waterTrayScalePower, true, "Expect waterTrayPower to have power when calling the enableWaterFlushingFunction() method");
    });

    this.Then(/^if watertray weighs a certain amount of waste$/, function () {     

        assert.isAtMost(myMachine.waterTrayScaleWeigh, 5,'Expect the waterTrayScaleWeight not to weigh anything more than 5g when the machine has never been used');  
        
        myMachine.checkIfWaterTrayIsEmpty(15);

        assert.isAbove(myMachine.waterTrayScaleWeigh, 10,'check if the waterTrayScaleWeight weigs more than 10g when calling the checkIfWaterTrayIsEmpty()');   
    });

    this.Then(/^find out if it needs to flush$/, function () {
        myMachine.startFlushCleaning();
        assert.strictEqual(myMachine.timeToCleanFlush, true, "[message]");
    });
    //Scenario: coffee machine waterTray functions ends

    //Scenario: scale/weigh for milk for the coffee types start

    this.When(/^milk scale is on$/, function () {
        myMachine.checkIfMilkScaleIsOn();
        assert.strictEqual(myMachine.milkScaleOn, true, "expect that milkScaleOn is true if calling the checkIfMilkScaleIsOn() method");
    });

    this.Then(/^weigh if there is any milk$/, function () {
        myMachine.weighAmountOfMilk(0);
        assert.deepEqual(myMachine.amountOfMilk, 0, "expect in a new machine that amountOfMilk weighs 0 when calling weighAmountOfMilk()");

        myMachine.weighAmountOfMilk(5000); //ml 5l fill of milk
        assert.isAtLeast(myMachine.amountOfMilk,2000,"expect to have atleast 2l of milk")
    });

    this.Then(/^warn if amount of milk is getting low$/, function () {
        myMachine.weighAmountOfMilkWarning(1900);
        assert.isBelow(myMachine.warningIfLowOnMilk, 2000,"expect warning when the amountOfMilk is bellow 2l of milk when calling weighAmountOfMilk()")
    });

    //Scenario: scale/weigh for milk for the coffee types end

    //Scenario: amount of ingrediens per blackCoffee start

    this.Given(/^that the machine needs coffe recepie$/, function () {
        myMachine.checkIfCoffeMachineHasRecepies();
        assert.strictEqual(myMachine.coffeeRecepie1, true, "expect that coffeeRecepie1 is true when calling checkIfCoffeMachineHasRecepies");
        assert.strictEqual(myMachine.coffeeRecepie2, true, "expect that coffeeRecepie2 is true when calling checkIfCoffeMachineHasRecepies");
        assert.strictEqual(myMachine.coffeeRecepie3, true, "expect that coffeeRecepie3 is true when calling checkIfCoffeMachineHasRecepies");
    });

    this.When(/^the machine wants to make coffee check ingredients$/, function () {

    });

    this.Then(/^select correct amount of ingrediens for black coffe check ingredients$/, function () {

    });
    //Scenario: amount of ingrediens per blackCoffee end
}
