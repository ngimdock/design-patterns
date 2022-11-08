import { Produit } from "./Produit";
import { Produit1 } from "./produitConcrets/Produit1.js";
import { Produit2 } from "./produitConcrets/Produit2.js";

export class ProduitFactory {
  public static TYPE_PRODUIT1: number = 1;
  public static TYPE_PRODUIT2: number = 2;

  constructor() {}

  getProduit(typeProduit: number): Produit {
    let produit: Produit;
    switch (typeProduit) {
      case ProduitFactory.TYPE_PRODUIT1:
        produit = new Produit1();
        break;
      case ProduitFactory.TYPE_PRODUIT2:
        produit = new Produit2();
        break;
      default:
        throw Error("Ce type de produit n'existe pas !");
    }

    return produit;
  }
}
