export interface Builder {
  reset(): void;
  setSeats(seats: number): void;
  setEngine(engine: string): void;
  setTripComputer(setupTrip: boolean): void;
  setGPS(setupGps: boolean): void;
}
