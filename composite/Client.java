// import repertoire.Repertoire;
// import sous_repertoire.Sous_repertoire;
import fichier.Fichier;
import type_fichier.FichierPdf;
import type_fichier.FichierTxt;

class Client {
    public static void main(String[] args) {
        Fichier fichier1 = new FichierPdf("fichier1", "pdf");

        Fichier fichier2 = new FichierTxt("fichier2", "txt");

        // Repertoire rep1 = new Sous_repertoire("rep1");

        // rep1.add(fichier1);

        // rep1.add(fichier2);

        // rep1.decrire();

        fichier1.decrire();
        fichier2.decrire();
    }
}