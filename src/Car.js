import Vehicle from "./Vehicle.js";

class Car extends Vehicle {
    constructor(type, color, numWheels) {
        super(type, color, numWheels);
    }
}

export default Car;