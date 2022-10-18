import { ProduitFactory } from "../ProduitFactory.js";
import { Produit1 } from "../produitsConcrets/Produit1.js";
export class ProduitFactory1 extends ProduitFactory {
    constructor() {
        super();
    }
    createProduit() {
        return new Produit1();
    }
}
