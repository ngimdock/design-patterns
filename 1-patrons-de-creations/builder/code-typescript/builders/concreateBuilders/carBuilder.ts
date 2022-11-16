import { Car } from "../../entities/car.js";
import { Builder } from "../interface/builder.js";

export class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(): void {
    this.car.setSeats(9);
  }

  setEngine(): void {
    this.car.setEngine("V8");
  }

  setTripComputer(): void {
    this.car.setTripComputer(true);
  }

  setGPS(): void {
    this.car.setGPS(true);
  }

  // the construction result
  getResult(): Car {
    const result = this.car;
    this.reset();
    return result;
  }
}
