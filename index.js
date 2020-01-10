// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {

      this.connectedToPower = false;
      this.connectedToWater = false;
      this.connectedToWaste = false;

    }

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

    
  
  }
  
  // Export the CoffeeMachine class
  module.exports = CoffeeMachine;