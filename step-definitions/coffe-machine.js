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
        //enough coffe method
        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(),false,'Expected a new machine to not have enough milk');
        //enough coffe method

        myMachine.fillWithMilk(1000);

        assert.deepEqual(myMachine.checkAmountOfMilkForLatte(),true,'Expected to have enough milk for a cup (after filling it with 1l  of milk');
        assert.deepEqual(myMachine.checkAmountOfMilkForMocha(),true,'Expected to have enough milk for a cup (after filling it with 1l  of milk');

        myMachine.milkCooler();
        assert.strictEqual(myMachine.coolerForMilk, true, "Expected the property milkCooler to be true after calling the milkCooler() method.");
    });

    this.When(/^type of coffee has been chosen$/, function (){
        myMachine.chooseRegularCoffee();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");

        myMachine.chooseLatteCoffee();
        assert.strictEqual(myMachine.coffeeTypeLatte, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");

        myMachine.chooseMochaCoffee();
        assert.strictEqual(myMachine.coffeeTypeMocha, true, "Expect the chooseRegularCOffe to be true after calling the chooseRegularCOffe() method");
    });

    this.Then(/^the coffe will be emptied down in the propper outlet$/, function () {
        myMachine.containerLockToOutlet1();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet1 to be true after calling the containerLockToOutlet1() method");

        myMachine.containerLockToOutlet2();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet2 to be true after calling the containerLockToOutlet2() method");

        myMachine.containerLockToOutlet3();
        assert.strictEqual(myMachine.coffeeTypeRegular, true, "Expect the containerLockToOutlet3 to be true after calling the containerLockToOutlet3() method");
    });

    this.Then(/^if no cup is placed coffe will be emptied in the water tray$/, function () {
        assert.isBelow(waterTrayScaleWeight, 5,'Expect the waterTrayScaleWeight not to weigh anything more than 5g when the machine has never been used');

        checkIfWaterTrayIsEmpty(50);

        assert.isAbove(waterTrayScaleWeight, 40,'Expect the waterTrayScaleWeight not to weigh anything more than 40g when the machine has never been used');

    });
}