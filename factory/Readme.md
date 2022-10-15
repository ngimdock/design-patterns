# Le pattern factory method

## Définition

**Factory** est un patron de conception de création qui définit une interface pour créer des objets dans une classe mère, mais délègue le choix des types d’objets à créer aux sous-classes.

## Informations

- Permet de créer un objet dont le type dépend du contexte
- Cet objet fait partie d’un ensemble de sous classe
- L’objet retourné est toujours du type de la classe mère
- Le polymorphisme permet de spécialiser les traitements

## Fonctionnement

Le patron de conception factory vous propose de remplacer les appels directs au constructeur de l’objet (à l’aide de l’opérateur new) en appelant une méthode fabrique spéciale.

## Quand est-il utilisé ?

- Il est utilisé lorsqu’à l’exécution il est nécessaire de déterminer
  dynamiquement quel objet d’un ensemble de sous-classes doit être instancié.
- Le client(la classe qui fait appel à la classe à instancier) ne peut déterminer le type d’objet à créer qu'à l’exécution

## Méthodes d'implémentation

Le pattern factory peux s'implémenter de 2 manières:

- Utilisation d'une méthode de création de l'objet(factory method) qui reçois des données en paramèttre pour determiner le type d'objet à créer.
- Déclarer la fabrique abstraite et laisser ses sous classes créer les objets.

## Premier cas d'utilisation: La factory method

Avec cettepremière approche, nous allons utiliser une fonction (factory method) qui permet de créer le bon type d'objet en fonction des données reçu en paramèttre.

<u>**Les participants**</u>

- **Client:** La classe qui fait appel à la fabrique pour lui fournir des objets déjà instanciés.
- **Fablique:** La classe qui définit la méthode de création d’objets
- **Produit:** La classe abstraite dont les sous classes seront instanciées
- **ProduitConcret:** Les sous classes concrètes à instancier

<u>**Structure générique**</u>

diagramme de classe générique du pattern avec la **factory method**
![diagramme de classe du pattern](https://i.ibb.co/d6LFz7W/factory-method-diagram.png)

<u>**Exemple**</u>

**Exemple:** On gère deux types de produits dans un système. Mais le
programme qui se charge de manipuler ces produits ne connait le type de
produit à exécuter que lors de l’exécution. On souhaite utiliser le pattern
Factory Methode pour gérer cette situation.

![exmple concrès](https://i.ibb.co/7pbjwYD/exemple-en-image.png)

## Deuxième cas d'utilisation: la fabrique abstraite

Avec cette deuxième approche, nous allons déclarer une fabrique abstraite et laisser ses sous classe créer les objets.

<u>**Les participants**</u>

- **Client:** La classe qui fait appel à la fabrique pour lui fournir des objets de type Produit
- **FrabriqueAbstraite:** Classe abstraite qui abrite la signature de la méthode de fabrique et l’implémentation des méthodes qui invoquent cette méthode de fabrique.
- **FabriqueConcrete:** Classe concrète qui implémente la méthode fabrique. On peut avoir plusieurs fabriques concrètes.
- **Produit:** La classe abstraite dont les sous –classes seront instanciées
- **ProduitConcret:** Les sous classes concrètes à instancier

<u>**Structure générique** </u>

diagramme de classe générique du pattern avec la méthode de la **fabrique abstraite**
![diagramme de classe du pattern](https://i.ibb.co/8skqqb0/fabrique-abstraite.png)

<u>**Exemple**</u>

**Exemple:** On gère deux types de produits dans un système. Mais le
programme qui se charge de manipuler ces produits ne connait le type de
produit à exécuter que lors de l’exécution. On souhaite utiliser cette fois le
pattern Factory pour gérer cette situation.

![exmple concrès](https://i.ibb.co/fNtDGtW/exemple-fabrique-abstraite.png)
