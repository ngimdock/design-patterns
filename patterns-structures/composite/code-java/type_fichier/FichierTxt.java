package type_fichier;

import fichier.Fichier;

public class FichierTxt extends Fichier {

    private String type;

    public FichierTxt(String nom) {
        super(nom);

        this.type = "txt";
    }

    @Override
    public String getType(){
        return type;
    }

    @Override
    public void decrire() { 
        System.out.println("Nom: " + super.getNom() + "\nType: " + type);
    }
}
