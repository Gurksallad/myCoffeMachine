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
        assert.strictEqual(myMachine.grinderPower1, true, 'expect grinder 1 to function if calling the checkIfBeanGrindersHavePower()');
        assert.strictEqual(myMachine.grinderPower2, true, 'expect grinder 2 to function if calling the checkIfBeanGrindersHavePower()');
        assert.strictEqual(myMachine.grinderPower3, true, 'expect grinder 3 to function if calling the checkIfBeanGrindersHavePower()');
    });

    this.When(/^bean grinder are connected to containers enable grinder start\/off$/, function () {

    });

    this.Then(/^start or stop grinder$/, function () {

    });
    //Scenario: coffee machine blenders ends
}

    



