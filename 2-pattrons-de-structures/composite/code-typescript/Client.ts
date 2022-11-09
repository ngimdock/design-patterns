import { FichierTxt } from "./type_fichier/fichierTxt.js";
import { FichierPdf } from "./type_fichier/fichierPdf.js";
import { Fichier } from "./fichier/fichier";
import { SousRepertoire } from "./sousRepertoire/sousRepertoire.js";

const fichier1: FichierTxt = new FichierTxt("fichier1");
const fichier2: FichierPdf = new FichierPdf("fichier2");
const fichier3: FichierTxt = new FichierTxt("fichier3");

const rep1: SousRepertoire = new SousRepertoire("rep 1");
const rep2: SousRepertoire = new SousRepertoire("rep 2");

rep2.ajouter(fichier2, fichier3);
rep1.ajouter(fichier1, fichier2, rep2);

rep1.decrire();
