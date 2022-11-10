# Le pattern factory

## Définition

**Factory** est un patron de conception de création qui définit une interface pour créer des objets dans une classe mère, mais délègue le choix des types d’objets à créer aux sous-classes.

## Méthodes d'implémentation

Le pattern factory peux s'implémenter de 2 manières:

- Utilisation d'une méthode de création de l'objet(factory method) qui reçois des données en paramèttre pour determiner le type d'objet à créer.
- Déclarer la fabrique abstraite et laisser ses sous classes créer les objets.

## Premier cas d'utilisation: La factory method

Avec cette première approche, nous allons utiliser une fonction (factory method) qui permet de créer le bon type d'objet en fonction des données reçu en paramèttre.

<u>**Structure générale**</u>

Structure générale du pattern factory avec la **factory method**
![diagramme de classe du pattern](https://i.ibb.co/d6LFz7W/factory-method-diagram.png)

## Deuxième cas d'utilisation: la fabrique abstraite

Avec cette deuxième approche, nous allons déclarer une fabrique abstraite et laisser ses sous classe créer les objets.

<u>**Structure générale** </u>

diagramme de classe générique du pattern avec la méthode de la **fabrique abstraite**
![diagramme de classe du pattern](https://i.ibb.co/8skqqb0/fabrique-abstraite.png)

## Cas pratique du patron composite

On gère deux types de produits dans un système. Mais le
programme qui se charge de manipuler ces produits ne connait le type de
produit à exécuter que lors de l’exécution. On souhaite utiliser le pattern
Factory Methode pour gérer cette situation.

<u>Structure de la première méthode </u>
![exmple concrès](https://i.ibb.co/7pbjwYD/exemple-en-image.png)

<u>Structure de la deuxième méthode </u>
![exmple concrès](https://i.ibb.co/fNtDGtW/exemple-fabrique-abstraite.png)

## Implémentation du cas pratique en Java et Typescript

Voir les 2 dossiers ci-dessus
