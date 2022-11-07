import composite.repertoire.Repertoire;

abstract class Fichier implements Repertoire {
    private String nom;
    private String type;

    public Fichier(String nom, String type) {
        this.nom = nom;
        this.type = type;
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
        System.out.println("Nom: " + this.getNom() + "\n Type: " + this.getType());
    }
}
