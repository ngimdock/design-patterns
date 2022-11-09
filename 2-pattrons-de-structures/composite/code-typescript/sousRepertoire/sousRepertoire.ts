import { Repertoire } from "../repertoire/repertoire.js";

export class SousRepertoire implements Repertoire {
  private repertoireFils: Repertoire[];

  constructor(private nom: string, private type = "dossier") {
    this.repertoireFils = [];
  }

  getNom() {
    return this.nom;
  }

  getType() {
    return this.type;
  }

  getRepertoireFils() {
    return this.repertoireFils;
  }

  decrire() {
    console.log(`Nom: ${this.nom}, Type: ${this.type}`);
    console.log("Description des enfants");

    this.repertoireFils.forEach((fils: Repertoire) => {
      fils.decrire();
    });
  }

  ajouter(...fils: Repertoire[]) {
    fils.forEach((elt) => this.repertoireFils.push(elt));
  }

  supprimer(fils: Repertoire) {
    const index = this.repertoireFils.findIndex(
      (elt: Repertoire) => elt.getNom === fils.getNom
    );

    this.repertoireFils.splice(index, 1);
  }
}
