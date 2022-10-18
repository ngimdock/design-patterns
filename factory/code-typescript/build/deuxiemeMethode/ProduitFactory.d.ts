import { Produit } from "./Produit.js";
export declare abstract class ProduitFactory {
    constructor();
    getProduit(): Produit;
    abstract createProduit(): Produit;
}
