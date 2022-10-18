import produitsconcrets.Produit1;
import produitsconcrets.Produit2;

// La fabique: c'est la classe qui va créer les objets grâce à la factory method
public class ProduitFactory {

    private static final int TYPE_PRODUIT1 = 1;
    private static final int TYPE_PRODUIT2 = 2;

    // La factory method
    public Produit getProduit(int typeProduit) {
        Produit produit = null;
        switch(typeProduit){
            case TYPE_PRODUIT1:
                produit = new Produit1();
                break;
            case TYPE_PRODUIT2:
                produit = new Produit2();
                break;
            default:
                throw new IllegalArgumentException("Type de produit inconnu");
        }

        return produit;
    }
}