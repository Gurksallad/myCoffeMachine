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
        assert.deepEqual(myMachine.coffeePerRegularBlackCoffee(),false,'Expected a new machine to not have enough coffee');
        myMachine.fillContainer1WithCoffee(500);
        assert.deepEqual(myMachine.checkIfEnoughBlackCoffeeForACup(),true,'Expected to have enough coffee for a cup (after filling it with 100 grams of ground coffee');

        myMachine.espressoCoffeeAmount();

        myMachine.cafeLatteCoffeeAmount();

    });

    this.Given(/^enough stored milk for the different coffees\.$/, function () {

    });

    this.When(/^type of coffee has been chosen$/, function (){

    });
    
    this.When(/^if there is enough coffe left for a cup of coffee$/, function () {

    });

    this.When(/^paid for fully$/, function () {

    });

    this.When(/^pressed the "([^"]*)" button$/, function () {

    });

    this.Then(/^the coffe will be emptied down in the propper outlet$/, function () {

    });
}