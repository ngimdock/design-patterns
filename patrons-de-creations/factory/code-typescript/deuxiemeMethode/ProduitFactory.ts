import { Produit } from "./Produit.js";

export abstract class ProduitFactory {
  constructor() {}

  getProduit(): Produit {
    return this.createProduit();
  }

  abstract createProduit(): Produit;
}
