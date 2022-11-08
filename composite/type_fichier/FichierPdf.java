package type_fichier;

import fichier.Fichier;

public class FichierPdf extends Fichier {
    
    private String type;

    public FichierPdf(String nom) {
        super(nom);

        this.type = "pdf";
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
