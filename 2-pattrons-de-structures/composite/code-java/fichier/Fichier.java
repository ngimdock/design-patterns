package fichier;

import repertoire.Repertoire;

public abstract class Fichier implements Repertoire {
    private String nom;

    public Fichier(String nom) {
        this.nom = nom;
    }

    @Override
    public String getNom() {
        return nom;
    }

    public abstract String getType();

    public abstract void decrire();
}
