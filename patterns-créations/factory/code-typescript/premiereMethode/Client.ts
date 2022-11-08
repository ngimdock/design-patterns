import { Produit } from "./Produit";
import { ProduitFactory } from "./ProduitFactory.js";

const produitFactory = new ProduitFactory();

let produit: Produit;

produit = produitFactory.getProduit(ProduitFactory.TYPE_PRODUIT1);
produit.methodeProduit();

produit = produitFactory.getProduit(ProduitFactory.TYPE_PRODUIT2);
produit.methodeProduit();
