import { ProduitFactory } from "../ProduitFactory.js";
import { Produit2 } from "../produitsConcrets/Produit2.js";
export class ProduitFactory2 extends ProduitFactory {
    constructor() {
        super();
    }
    createProduit() {
        return new Produit2();
    }
}
