let CoffeeMachine = require('../index.js');
let myMachine;

module.exports = function () {
   
    this.Given(/^that the machine is pluggen in$/, function (){
        myMachine = new CoffeeMachine();
        myMachine.pluggedInToPower();
        assert.strictEqual(myMachine.connectedToPower, true, 'Expected the property pluggedInToPower to be true after calling the pluggedInToPower() method');
    });

    this.Given(/^the water is available$/, function () {
        myMachine.pluggedInToWater();
        assert.strictEqual(myMachine.connectedToWater, true, "Expected the property pluggedInToWater to be true after calling the pluggedInToWater() method.");

        myMachine.pluggedInToWaste();
        assert.strictEqual(myMachine.connectedToWaste, true, "Expected the property pluggedInToWaste to be true after calling the pluggedInToWaste() method.");
    });

    this.Given(/^that the machine has enough coffe beans in each different coffe container$/, function () {
        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(),false,'Expected a new machine to not have enough coffee');
        myMachine.fillContainer1WithCoffee(500);
        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(),true,'Expected to have enough coffee for a cup (after filling it with 500 grams of ground coffee');

        assert.deepEqual(myMachine.checkIfEnoughMochaForACUP(),false,'Expected a new machine to not have enough coffee');
        myMachine.fillContainer2WithCoffee(500);
        assert.deepEqual(myMachine.checkIfEnoughMochaForACUP(),true,'Expected to have enough coffee for a cup (after filling it with 500 grams of ground coffee');

        assert.deepEqual(myMachine.checkIfEnoughLatteCoffeForACup(),false,'Expected a new machine to not have enough coffee');
        myMachine.fillContainer3WithCoffee(500);
        assert.deepEqual(myMachine.checkIfEnoughLatteCoffeForACup(),true,'Expected to have enough coffee for a cup (after filling it with 500 grams of ground coffee');
    });

    this.Given(/^enough stored milk for the different coffees\.$/, function () {
        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(),false,'Expected a new machine to not have enough milk');

        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(),false,'Expected a new machine to not have enough milk');

        myMachine.fillWithMilk(1000);

        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(),true,'Expected to have enough milk for a cup (after filling it with 1l  of milk');
        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(),true,'Expected to have enough milk for a cup (after filling it with 1l  of milk');
    
    
        myMachine.milkCooler(7);

        assert.strictEqual(myMachine.coolerForMilk, true, "Expected the property coolerForMilk to be true after calling the milkCooler() method.");

        assert.isAtMost(myMachine.milkCoolerTemp, 7, "Expected the property milkCoolerTemp to be at most 7 degrees after calling the milkCooler() method.");

        assert.strictEqual(myMachine.coolerForMilkTempOk, true, "Expected the property coolerForMilkTempOk to be true after calling the milkCooler() method.");
    });

    this.When(/^type of coffee has been chosen$/, function (){
        myMachine.chooseRegularCoffee();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");

        myMachine.chooseLatteCoffee();
        assert.strictEqual(myMachine.coffeeTypeLatte, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");

        myMachine.chooseMochaCoffee();
        assert.strictEqual(myMachine.coffeeTypeMocha, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");
    });

    this.Then(/^the coffe will be emptied down in the propper outlet if no cup is placed coffe will be emptied in the water tray$/, function () {
        myMachine.containerLockToOutlet1();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet1 to be true after calling the containerLockToOutlet1() method");

        myMachine.containerLockToOutlet2();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet2 to be true after calling the containerLockToOutlet2() method");

        myMachine.containerLockToOutlet3();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet3 to be true after calling the containerLockToOutlet3() method");
    });

    this.Then(/^if a certain amount of weight is in the water tray, flush it\.$/, function () {
        assert.isBelow(myMachine.waterTrayScaleWeigh, 5,'Expect the waterTrayScaleWeight not to weigh anything more than 5g when the machine has never been used');

        myMachine.checkIfWaterTrayIsEmpty(10);

        assert.isAtLeast(myMachine.waterTrayScaleWeigh, 10,'Expect the waterTrayScaleWeight not to weigh anything more than 40g when the machine has never been used');

        myMachine.startFlushingWaterTray();
        assert.strictEqual(myMachine.flushWaterTray, true, 'Expected the property startFlushingWaterTray to be true after calling the startFlushingWaterTray() method');
    });

    this.Then(/^check if its flushed\.$/, function (){
        myMachine.checkIfFlushed();
        assert.strictEqual(myMachine.trayIsFlushed, true, 'Expected the property trayIsFlushed to be true after calling the checkIfFlushed() method');
    });
}