import { Produit } from "../Produit.js";

export class Produit2 extends Produit {
  constructor() {
    super();
  }

  methodeProduit(): void {
    console.log("Je suis un produit de type 2");
  }
}
