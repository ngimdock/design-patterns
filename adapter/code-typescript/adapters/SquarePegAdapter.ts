import { RoundPeg } from "../round/RoundPeg";
import { SquarePeg } from "../square/SquarePeg";

export class SquarePegAdapter extends RoundPeg {
  constructor(private peg: SquarePeg) {
    super(peg.getWidth);
  }

  get getRaduis(): number {
    return (this.peg.getWidth * Math.sqrt(2)) / 2;
  }
}
