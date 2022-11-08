package adapter;

import java.lang.Math;

import  round.RoundPeg;

import  square.SquarePeg;

public class SquarePegAdapter extends RoundPeg {

    private SquarePeg squarePeg;

    public SquarePegAdapter(SquarePeg squarePeg) {
        this.squarePeg = squarePeg;
    }

    public double getRaduis() {
        double result;
        result = (this.squarePeg.getWith() * Math.sqrt(2))/2;

        return result;
    }
}