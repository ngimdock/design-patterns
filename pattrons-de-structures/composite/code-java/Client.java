import repertoire.Repertoire;
import sous_repertoire.Sous_repertoire;
import fichier.Fichier;
import type_fichier.FichierPdf;
import type_fichier.FichierTxt;

class Client {
    public static void main(String[] args) {
        Fichier fichier1 = new FichierPdf("fichier1");

        Fichier fichier2 = new FichierTxt("fichier2");

        Fichier fichier3 = new FichierTxt("fichier3");

        Sous_repertoire rep1 = new Sous_repertoire("rep1");

        Sous_repertoire rep2 = new Sous_repertoire("rep2");

        Sous_repertoire rep3 = new Sous_repertoire("rep3");
        
        rep2.add(fichier3);
        rep3.add(fichier1);

        rep1.add(fichier1, fichier2, rep2, rep3);

        rep1.decrire();
    }
}