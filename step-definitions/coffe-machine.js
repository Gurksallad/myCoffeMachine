let CoffeeMachine = require('../index.js');
let myMachine;
let thisCoffee;
module.exports = function () {

//scenario The machine is connected to power/water and waste and start button works
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
//The machine is connected to power/water and waste and start button works end

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
        myMachine.fillCoffeeContainer1(5000);
        myMachine.checkIfContainer1HasEnoughCoffee(500);
        assert.isAtLeast(myMachine.amoutOfCoffeContainter1, 1000, 'amoutOfCoffeContainter1 has enough coffe in container1 when calling checkIfContainer1HasEnoughCoffee else its getting low');

        myMachine.fillCoffeeContainer2(5000);
        myMachine.checkIfContainer2HasEnoughCoffee(500);
        assert.isAtLeast(myMachine.amoutOfCoffeContainter2, 1000, 'amoutOfCoffeContainter1 has enough coffe in container2 when calling checkIfContainer2HasEnoughCoffee else its getting low');

        myMachine.fillCoffeeContainer3(5000);
        myMachine.checkIfContainer3HasEnoughCoffee(500);
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

    this.Given(/^that watertray scale has power$/, function () {
        myMachine.enableWaterFlushingFunction();
        assert.strictEqual(myMachine.waterTrayScalePower, true, "Expect waterTrayPower to have power when calling the enableWaterFlushingFunction() method");
    });

    this.When(/^watertray scale is on$/, function () {
        myMachine.enableWaterFlushingFunction();
        assert.strictEqual(myMachine.waterScaleOn, true, "Expect waterTrayPower to be on when calling the enableWaterFlushingFunction() method");
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
    this.Given(/^that milk scale has power$/, function () {
        myMachine.checkIfmilkScaleHasPower();
        assert.strictEqual(myMachine.scaleForMilkHasPower, true, "expect that scaleForMilkHasPower is true if calling the checkIfmilkScaleHasPower() method");
    });

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
    this.Given(/^that ingrediens excists$/, function () {
        myMachine.fillCoffeeContainer1(5000);
        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");

        myMachine.fillCoffeeContainer2(5000);
        assert.deepEqual(myMachine.checkIfEnoughMochaForACUP(), true, "if container is filled with 5kg of coffe there is enough for a cup");

        myMachine.fillCoffeeContainer3(5000);
        assert.deepEqual(myMachine.checkIfEnoughLatteCoffeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");

        myMachine.weighAmountOfMilk(5000);
        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(), true, "if container is filled with 5l of milk there is enough for a cup");

        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(), true, "if container is filled with 5l of milk there is enough for a cup");

        myMachine.ingredientsWeLookedForAreFound();
        assert.strictEqual(myMachine.ingredientsFound, true, "when above stages are done, all ingredients are found wich makes this true");
    });

    this.When(/^when ingrediens excistens are confirmed$/, function () {
        myMachine.confirmIngredientsAreFound();
        assert.strictEqual(myMachine.confirmation, true, "confirms if ingredients are found");
    });

    this.Then(/^check if there is enough for a cup black coffee$/, function () {
        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");
    });
    //Scenario: amount of ingrediens per blackCoffee end

    //Scenario: amount of ingrediens per MochaCoffee start
    this.Then(/^check if there is enough for a cup Mocha$/, function () {
        assert.deepEqual(myMachine.checkIfEnoughMochaForACUP(), true, "if container is filled with 5kg of coffe there is enough for a cup");

        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(), true, "if container is filled with 5l of coffe there is enough for a cup");
    });
    //Scenario: amount of ingrediens per MochaCoffee end

    //scenario amount of ingrediens per CaffeLatte start
    this.Then(/^check if there is enough for a cup caffe Latte$/, function () {
        assert.deepEqual(myMachine.checkIfEnoughLatteCoffeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");

        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(), true, "if container is filled with 5l of coffe there is enough for a cup");
    });
    //scenario amount of ingrediens per CaffeLatte end

    //Scenario Outline: The customer pays with 5kr and 10kr coins for coffee start
    this.Given(/^there is enough ingrediens for the different coffees$/, function () {

        myMachine.weighAmountOfMilk(5000);      
        myMachine.fillCoffeeContainer1(5000);
        myMachine.fillCoffeeContainer2(5000);  
        myMachine.fillCoffeeContainer3(5000);  

        assert.deepEqual(myMachine.checkIfEnoughLatteCoffeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");
        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(), true, "if container is filled with 5l of coffe there is enough for a cup");

        assert.deepEqual(myMachine.checkIfEnoughMochaForACUP(), true, "if container is filled with 5kg of coffe there is enough for a cup");
        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(), true, "if container is filled with 5l of coffe there is enough for a cup");

        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(), true, "if container is filled with 5kg of coffe there is enough for a cup");
    });

    this.When(/^the user inserts a (\d+) kr coin$/, function (amountOfMoney) {
        amountOfMoney /= 1;

        let moneyBefore = myMachine.insertedMoney;
        myMachine.insertMoney(amountOfMoney);
        assert.deepEqual(myMachine.insertedMoney, moneyBefore + amountOfMoney, "Expected the amount of money inserted to increase with the amount inserted");
    });

    this.When(/^the user inserts a "([^"]*)" kr coin$/, function (nonMoney) {
        global.nonMoney = nonMoney

        assert.throws(function () {myMachine.insertMoney(global.nonMoney);}, Error,       'You must insert money not ' + nonMoney, 'Expected the runtime error "You must insert money not ' + nonMoney + '"');
    });

    this.Then(/^check if there is enough money for the coffee$/, function () {
        myMachine.checkMoney(15);
        assert.deepEqual(myMachine.checkAmountOfMoney(), true, "there is enough monney for the coffee you want!");

        myMachine.checkMoney(20);
        assert.deepEqual(myMachine.checkAmountOfMoney2(), true, "there is enough monney for the coffee you want!");
    });

    this.Then(/^if right amount then activate button for chosen coffee$/, function () {
        myMachine.coffeeButtons();
        assert.strictEqual(myMachine.coffeeButton1, true, "button is activared");
        assert.strictEqual(myMachine.coffeeButton2, true, "button is activared");
        assert.strictEqual(myMachine.coffeeButton3, true, "button is activared");
    });

    this.Then(/^press one of the dispense buttons$/, function () { 
        myMachine.coffeeButtonPress();
        assert.strictEqual(myMachine.coffeeButtonPressed1, true, "button is activared");
        assert.strictEqual(myMachine.coffeeButtonPressed2, true, "button is activared");
        assert.strictEqual(myMachine.coffeeButtonPressed3, true, "button is activared");
    });

    this.Then(/^the user recieves the "([^"]*)" that was paid for\.$/, function (coffes) {
        if(coffes === 'regular'){
            thisCoffee = myMachine.rightTypeOfCoffee();
        }
        if(coffes === 'mocha'){
            thisCoffee = myMachine.rightTypeOfCoffee();
        }
        if(coffes === 'latte'){
            thisCoffee = myMachine.rightTypeOfCoffee();
        }
        if(coffes === 'nothing'){
            thisCoffee = myMachine.rightTypeOfCoffee();
        }
    });
    //Scenario Outline: The customer pays with 5kr and 10kr coins for coffee end

    //Scenario Outline: The customer pays with creditcard blip function start

    this.Given(/^acces to internet for blip function to be active$/, function () {
        myMachine.pluggedInToInternet();
        assert.strictEqual(myMachine.connectedToInternet, true, "when calling pluggedInToInternet() expect connectedToInternet to be true");
    });

    this.When(/^costumer scans the (\d+)$/, function (amountOfMoney) {    
        amountOfMoney /= 1;

        let moneyBefore = myMachine.insertedMoney;
        myMachine.insertMoney(amountOfMoney);
        assert.deepEqual(myMachine.insertedMoney, moneyBefore + amountOfMoney, "Expected the amount of money inserted to increase with the amount inserted");
    });

    this.When(/^costumer scans the "([^"]*)"$/, function (nonMoney) { 
        global.nonMoney = nonMoney

        assert.throws(function () {myMachine.insertMoney(global.nonMoney);}, Error,       'You must insert money not ' + nonMoney, 'Expected the runtime error "You must insert money not ' + nonMoney + '"');
    });
    //Scenario Outline: The customer pays with creditcard blip function end
}
