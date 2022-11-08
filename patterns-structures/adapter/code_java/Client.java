
import round.RoundHole;

import round.RoundPeg;

import square.SquarePeg;

import adapter.SquarePegAdapter;

public class Client {
  public static void main(String[] args) {
    System.out.println("Hello World");

    RoundHole hole = new RoundHole(10);

    RoundPeg smallRoundPeg = new RoundPeg(3);
    RoundPeg largeRoundPeg = new RoundPeg(17);

    if(hole.fits(smallRoundPeg)){
        System.out.println("Small round peg fits into hole");
    }

    if(!hole.fits(largeRoundPeg)){
        System.out.println("Large round peg does not fits into hole");
    }

    SquarePeg squarePeg = new SquarePeg(7);

    // should throw error 
    // answer = hole.fits(squarePeg)

    SquarePegAdapter squarePegAdapter = new SquarePegAdapter(squarePeg);

    if(hole.fits(squarePegAdapter)) {
        System.out.println("square peg fits into round hole");
    }
  }
}
