package round;

import round.RoundPeg;

public class RoundHole {
    private double radius;

    public RoundHole(double radius){
        this.radius = radius;
    }

    public double getRaduis(){
        return radius;
    }

    public boolean fits(RoundPeg peg) {
        boolean awnser;
        
        awnser = this.getRaduis() >= peg.getRaduis();

        return awnser;
    }
}
