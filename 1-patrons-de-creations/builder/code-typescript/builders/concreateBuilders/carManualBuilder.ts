import { Manual } from "../../entities/manual.js";
import { Builder } from "../interface/builder.js";

export class CarManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(): void {
    this.manual.setSeats("Here are the seats");
  }

  setEngine(): void {
    this.manual.setEngine("Here is the engine");
  }

  setTripComputer(): void {
    this.manual.setTripComputer("Here is the trip computer");
  }

  setGPS(): void {
    this.manual.setGPS("Here is the GPS");
  }

  // the construction result
  getResults(): Manual {
    const result = this.manual;
    this.reset();
    return result;
  }
}
