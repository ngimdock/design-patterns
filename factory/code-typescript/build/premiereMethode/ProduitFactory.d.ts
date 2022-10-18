import { Produit } from "./Produit";
export declare class ProduitFactory {
    static TYPE_PRODUIT1: number;
    static TYPE_PRODUIT2: number;
    constructor();
    getProduit(typeProduit: number): Produit;
}
