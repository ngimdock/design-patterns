export class Car {
  private seats: number;
  private engine: string;
  private tripComputer: boolean;
  private gps: boolean;

  constructor() {}

  //getters
  get getSeats(): number {
    return this.seats;
  }

  get getEngine(): string {
    return this.engine;
  }

  get getTripComputer(): boolean {
    return this.tripComputer;
  }

  get getGPS(): boolean {
    return this.gps;
  }

  //setters
  setSeats(seats: number) {
    this.seats = seats;
  }

  setEngine(engine: string) {
    this.engine = engine;
  }

  setTripComputer(tripComputer: boolean) {
    this.tripComputer = tripComputer;
  }

  setGPS(gps: boolean) {
    this.gps = gps;
  }
}
