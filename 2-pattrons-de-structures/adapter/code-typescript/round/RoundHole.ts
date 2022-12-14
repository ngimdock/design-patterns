import { RoundPeg } from "./RoundPeg.js";

export class RoundHole {
  constructor(private raduis: number) {}

  get getRaduis(): number {
    return this.raduis;
  }

  public fits(peg: RoundPeg): boolean {
    return this.getRaduis >= peg.getRaduis;
  }
}
