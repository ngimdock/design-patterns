import produitconcrets.Produit1;
import produitconcrets.Produit2;


public class Client {

    public static void main(String[] args) {
        ProduitFactory produitFactory = new ProduitFactory();

        Produit produit = null;
        
        produit = produitFactory.getProduit(produitFactory.TYPE_PRODUIT1);
        produit.methodeProduit();

        produit = produitFactory.getProduit(produitFactory.TYPE_PRODUIT2);
        produit.methodeProduit();

        
        System.out.println("Hello world to the client");
    }

}