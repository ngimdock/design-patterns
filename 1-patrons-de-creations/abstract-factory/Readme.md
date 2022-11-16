# Le pattern abstract factory

## Définition

_Abstract factory_ ou _Fabrique abstraite_ est un patron de conception qui permet de créer des familles d’objets apparentés sans préciser leur classe concrète.

## Structure générale

![voir ici](https://i.ibb.co/McKmDRK/Capture-d-cran-du-2022-11-16-12-17-43.png)

## Cas pratique du patron composite

Cet exemple montre comment la Fabrique abstraite peut être utilisée pour créer des éléments d’une UI multiplateforme sans coupler le code client avec les classes concrètes de l’UI, tout en gardant une cohérence entre les éléments créés et le système d’exploitation sélectionné.

Nous avons 2 catégories ou familles d'éléments UI que nous voulons créer (les éléments UI pour _MAC_ et ceux de _Window_). Ainsi nous pouvons utiliser le pattern _Abstract factory_ pour créer ces familles d'éléments.

## Structure du cas pratique

![voir ici](https://i.ibb.co/CJ5ZtmB/Capture-d-cran-du-2022-11-16-11-53-00.png)

## Implémentation du cas pratique en Java et Typescript

Voir les 2 dossiers ci-dessus
