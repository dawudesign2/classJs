import Vehicle from "./Vehicle.js";

class Motorcycle  extends Vehicle {
  constructor(name, color) {
    super(name, color);
    this.numWheels = 2;
  }
}


export default Motorcycle;
