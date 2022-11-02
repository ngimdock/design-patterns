import { RoundHole } from "./round/RoundHole";
import { RoundPeg } from "./round/RoundPeg";
import { SquarePeg } from "./square/SquarePeg";
import { SquarePegAdapter } from "./adapters/SquarePegAdapter";

const roundPeg = new RoundPeg(10);
const roundHole = new RoundHole(20);

const roundPegMatchHole = roundHole.fits(roundPeg);

console.log(roundPegMatchHole);

const squarePeg = new SquarePeg(4);
const adptedSquare = new SquarePegAdapter(squarePeg);
const squarePegMatchHole = roundHole.fits(adptedSquare);

console.log(squarePegMatchHole);
