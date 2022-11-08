package sous_repertoire;

import repertoire.Repertoire;

import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Sous_repertoire implements Repertoire {
    private String nom;
    private String type;
    protected List<Repertoire> repertoireFils = new ArrayList<>();

    public Sous_repertoire (String nom) {
        this.nom = nom;
        this.type = "dossier";
    }

    @Override
    public String getNom() {
        return nom;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public void decrire() {
        for(Repertoire repertoire : repertoireFils) {
            repertoire.decrire();
        }
    }

    public List<Repertoire> getSousRepertoireFils() {
        return repertoireFils;
    }

    public void add(Repertoire repertoire) {
        repertoireFils.add(repertoire);
    }

    public void add(Repertoire...  repertoires){
        repertoireFils.addAll(Arrays.asList(repertoires));
    }

    public void remove(Repertoire repertoire) {
        repertoireFils.remove(repertoire);
    }

    public void remove(Repertoire... repertoires) {
        repertoireFils.removeAll(Arrays.asList(repertoires));
    }

    public Repertoire obtenir(int i) {
        return this.repertoireFils.get(i);
    }

}