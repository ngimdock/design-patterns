package produit_factory;

import produits_concrets.Produit1;
import produits_concrets.Produit2;
import produit.Produit;

public class ProduitFactory {

    public static final int TYPE_PRODUIT1 = 1;
    public static final int TYPE_PRODUIT2 = 2;

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