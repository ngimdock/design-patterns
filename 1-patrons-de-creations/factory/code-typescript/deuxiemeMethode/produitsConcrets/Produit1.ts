import { Produit } from "../Produit.js";

export class Produit1 extends Produit {
  constructor() {
    super();
  }

  methodeProduit(): void {
    console.log("je suis le produit de type 1");
  }
}
