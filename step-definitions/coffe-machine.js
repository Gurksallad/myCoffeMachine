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
        
      });

      this.When(/^the scales\/weighs weigh the amount of coffe$/, function () {

      });
      this.When(/^get the machine will return the amount of coffee that is inside$/, function () {
        
      });

      this.Then(/^return a warning when about to run low on coffee$/, function () {

      });
    //Scenario: coffee machine scales/weighs for blender ends
}

    



