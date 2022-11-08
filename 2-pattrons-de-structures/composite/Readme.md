# Le pattern composite

## Définition

Composite est un patron de conception structurel qui permet d’agencer les objets dans des arborescences afin de pouvoir traiter celles-ci comme des objets individuels.

## Structure générale

![exmple concrès](https://i.ibb.co/gF2pzdh/composite-generale.png)

## Cas pratique du patron composite

On considère un système de gestion de fichiers. Ce système gère des
dossiers(répertoires) et chaque répertoire peut contenir des sous répertoires
(pouvant eux aussi contenir des sous répertoires) et des fichiers. Le système ne
connait que 2 types de fichiers : les fichiers TXT et les fichiers PDF.
Chaque élément du système de fichier est caractérisé par :

**Deux attributs :** nom et type (txt, pdf, ou dossier) </br>
**Des méthodes :**

- <ins>decrire</ins> : affiche le nom et le type de l’élément. Un dossier affiche en plus, la
  description de tous les éléments qu’il contient.

- <ins>ajouter</ins> un élément à un autre
- <ins>supprimer</ins> un élément d’un autre
- <ins>obtenir</ins> le ieme élément d’un autre

1. Quel est le patron de conception adapté pour ce problème ? Justifier
2. Donner sa structure générique et décrire les participants
3. Proposer une modélisation du problème à l’aide de ce patron
4. Donner le code Java de votre conception.

## Structure du cas pratique

![exmple concrès](https://i.ibb.co/mHNJNMc/composite-repertoire.png)

## Implémentation du cas pratique en Java et Typescript

Voir les 2 dossiers ci-dessus
