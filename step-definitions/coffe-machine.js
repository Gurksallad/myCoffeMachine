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

    });

}