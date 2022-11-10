
import produit_factory.ProduitFactory;
import produit.Produit;

public class Client {

    public static void main(String[] args) {
        ProduitFactory produitFactory = new ProduitFactory();

        Produit produit = null;
        
        produit = produitFactory.getProduit(produitFactory.TYPE_PRODUIT1);
        produit.methodeProduit();

        produit = produitFactory.getProduit(produitFactory.TYPE_PRODUIT2);
        produit.methodeProduit();

    }

}