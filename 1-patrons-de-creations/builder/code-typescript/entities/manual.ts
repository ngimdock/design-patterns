export class Manual {
  private seats: string;
  private engine: string;
  private tripComputer: string;
  private gps: string;

  constructor() {}

  //getters
  get getSeats(): string {
    return this.seats;
  }

  get getEngine(): string {
    return this.engine;
  }

  get getTripComputer(): string {
    return this.tripComputer;
  }

  get getGPS(): string {
    return this.gps;
  }

  //setters
  setSeats(seats: string) {
    this.seats = seats;
  }

  setEngine(engine: string) {
    this.engine = engine;
  }

  setTripComputer(tripComputer: string) {
    this.tripComputer = tripComputer;
  }

  setGPS(gps: string) {
    this.gps = gps;
  }
}
