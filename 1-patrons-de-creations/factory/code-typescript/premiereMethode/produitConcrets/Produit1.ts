import { Produit } from "../Produit.js";

export class Produit1 extends Produit {
  constructor() {
    super();
  }

  methodeProduit(): void {
    console.log("Je suis le produit de type 1");
  }
}
