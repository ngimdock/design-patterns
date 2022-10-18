

public class Client {
    public static void main(String[] args){

        ProduitFactory produitFactory1 = new ProduitFactory1();
        ProduitFactory produitFactory2 = new ProduitFactory2();

        Produit produit = null;

        produit = produitFactory1.getProduit();
        produit.methodeProduit();

        produit = produitFactory2.getProduit();
        produit.methodeProduit();

        System.out.println("Hello world to the client");
    }
}