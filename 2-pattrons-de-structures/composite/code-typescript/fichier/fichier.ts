import { Repertoire } from "../repertoire/repertoire.js";

export abstract class Fichier implements Repertoire {
  constructor(protected nom: string) {}

  getNom(): string {
    return this.nom;
  }

  abstract getType(): string;

  abstract decrire(): void;
}
