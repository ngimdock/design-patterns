package fabrique_concretes;

import produit_factory.ProduitFactory;
import produit.Produit;
import produits_concrets.Produit2;

public class ProduitFactory2 extends ProduitFactory {
    protected Produit createProduit(){
        return new Produit2();
    }
}