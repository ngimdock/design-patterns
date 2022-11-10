package produit_factory;

import produit.Produit;

public abstract class ProduitFactory {
    public Produit getProduit() {
        return createProduit();
    }

    protected abstract Produit createProduit();
}