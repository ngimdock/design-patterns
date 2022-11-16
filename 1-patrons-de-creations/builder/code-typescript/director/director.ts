import { Builder } from "../builders/interface/builder";

export class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  buildMinimalViableProduct(): void {
    this.builder.setSeats(10);
  }

  buildFullFeaturedProduct(): void {
    this.builder.setSeats(12);
    this.builder.setEngine("V8");
    // this.builder.setEngine(new SportEngine());
    this.builder.setTripComputer(false);
    this.builder.setGPS(true);
  }
}
