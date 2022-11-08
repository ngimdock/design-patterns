import { ProduitFactory1 } from "./fabriqueConcretes/ProduitFactory1.js";
import { ProduitFactory2 } from "./fabriqueConcretes/ProduitFactory2.js";
import { Produit } from "./Produit.js";

let produit: Produit;

produit = new ProduitFactory1().getProduit();

produit.methodeProduit();

produit = new ProduitFactory2().getProduit();
produit.methodeProduit();
