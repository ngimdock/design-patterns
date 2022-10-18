import { Produit } from "../Produit.js";
export class Produit1 extends Produit {
    constructor() {
        super();
    }
    methodeProduit() {
        console.log("je suis le produit de type 1");
    }
}
