import { Fichier } from "../fichier/fichier.js";

export class FichierTxt extends Fichier {
  constructor(protected nom: string, private type: string = "txt") {
    super(nom);
  }

  getType(): string {
    return this.type;
  }

  decrire(): void {
    console.log(`Nom: ${this.getNom()}, Type: ${this.getType()}`);
  }
}
