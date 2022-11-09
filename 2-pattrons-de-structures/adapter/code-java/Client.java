
import round.RoundHole;

import round.RoundPeg;

import square.SquarePeg;

import adapter.SquarePegAdapter;

public class Client {
  public static void main(String[] args) {

    RoundHole hole = new RoundHole(10);

    RoundPeg smallRoundPeg = new RoundPeg(3);
    RoundPeg largeRoundPeg = new RoundPeg(24);

    if(hole.fits(smallRoundPeg))
        System.out.println("Small round peg fits into hole");
    else
      System.out.println("Small round peg not fits into hole");
    

    if(hole.fits(largeRoundPeg))
        System.out.println("Large round peg fits into hole");
    else
        System.out.println("Large round peg not fits into hole");
    

    SquarePeg squarePeg = new SquarePeg(7);

    // should throw error 
    // answer = hole.fits(squarePeg)

    SquarePegAdapter adaptedSquarePeg = new SquarePegAdapter(squarePeg);

    if(hole.fits(adaptedSquarePeg)) 
        System.out.println("square peg fits into round hole");
    else
        System.out.println("square peg not fits into round hole");
  }
}
