

public class ProduitFactory1 extends ProduitFactory {
    protected Produit createProduit() {
        return new Produit1();
    }
}