package sous_repertoire;

import repertoire.Repertoire;

import java.awt.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Sous_repertoire implements Repertoire {
    private String nom;
    private String type;
    private List<Repertoire> repertoireFils = new ArrayList<>();

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

        System.out.println("Nom: " + nom + "\nType: " + type);
        System.out.println("Description de tous ses éléments du dossier " + nom);

        for(Repertoire repertoire : repertoireFils) {
            repertoire.decrire();
            // System.out.println("Nom fils: " + repertoire.getNom() + "\nType fils: " + repertoire.getType()); 
        }
    }

    public List<Repertoire> getSousRepertoireFils() {
        return repertoireFils;
    }

    public void ajouter(Repertoire repertoire) {
        repertoireFils.add(repertoire);
    }

    public void ajouter(Repertoire...  repertoires){
        repertoireFils.addAll(Arrays.asList(repertoires));
    }

    public void supprimer(Repertoire repertoire) {
        repertoireFils.remove(repertoire);
    }

    public void supprimer(Repertoire... repertoires) {
        repertoireFils.removeAll(Arrays.asList(repertoires));
    }

    public Repertoire obtenir(int i) {

        return this.repertoireFils.get(i);
    }

}