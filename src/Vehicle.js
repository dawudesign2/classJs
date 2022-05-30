class Vehicle {
    constructor(type, color, numWheels) {
        this.type = type;
        this.color = color;
        this.numWheels = numWheels;
    }

    logTypeAndProps() {
        console.log(`Type: ${this.type}, Color: ${this.color}, NumWheels: ${this.numWheels}`);
    }
  }
  
  export default Vehicle;