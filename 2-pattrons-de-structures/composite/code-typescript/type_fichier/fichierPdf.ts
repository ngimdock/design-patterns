import { Fichier } from "../fichier/fichier.js";

export class FichierPdf extends Fichier {
  constructor(protected nom: string, private type: string = "pdf") {
    super(nom);
  }

  getType(): string {
    return this.type;
  }

  decrire(): void {
    console.log(`Nom: ${this.getNom()}, Type: ${this.getType()}`);
  }
}
