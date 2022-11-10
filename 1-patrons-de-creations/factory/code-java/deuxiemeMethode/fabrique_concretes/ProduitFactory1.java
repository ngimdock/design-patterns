package fabrique_concretes;

import produit_factory.ProduitFactory;
import produit.Produit;
import produits_concrets.Produit1;

public class ProduitFactory1 extends ProduitFactory {
    protected Produit createProduit() {
        return new Produit1();
    }
}