import repertoire.Repertoire;
import sous_repertoire.Sous_repertoire;
import fichier.Fichier;
import type_fichier.FichierPdf;
import type_fichier.FichierTxt;

class Client {
    public static void main(String[] args) {
        Fichier fichier1 = new FichierPdf("fichier1", "pdf");

        Fichier fichier2 = new FichierTxt("fichier2", "txt");

        Fichier fichier3 = new FichierTxt("fichier3", "txt");

        Sous_repertoire rep1 = new Sous_repertoire("rep1", "dossier");

        Sous_repertoire rep2 = new Sous_repertoire("rep2", "dossier");
        
        rep2.add(fichier3);

        rep1.add(fichier1, fichier2, rep2);

        rep1.decrire();
    }
}