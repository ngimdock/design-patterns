

public class ProduitFactory2 extends ProduitFactory {
    protected Produit createProduit(){
        return new Produit2();
    }
}