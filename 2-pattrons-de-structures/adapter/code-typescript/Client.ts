import { RoundHole } from "./round/RoundHole.js";
import { RoundPeg } from "./round/RoundPeg.js";
import { SquarePeg } from "./square/SquarePeg.js";
import { SquarePegAdapter } from "./adapters/SquarePegAdapter.js";

const hole = new RoundHole(10);

const smallRoundPeg = new RoundPeg(3);
const largeRoundPeg = new RoundPeg(17);

if (hole.fits(smallRoundPeg)) console.log("Small round peg fits into hole");
else console.log("Small round peg not fits into hole");

if (hole.fits(largeRoundPeg)) console.log("Large round peg fits into hole");
else console.log("Large round peg not fits into hole");

const squarePeg = new SquarePeg(70);

// should throw error
//const answer = hole.fits(squarePeg)

const adaptedSquarePeg = new SquarePegAdapter(squarePeg);
if (hole.fits(adaptedSquarePeg)) console.log("square peg fits into hole");
else console.log("square peg not fits into hole");
