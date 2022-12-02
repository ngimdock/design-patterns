# Le pattern Bridge

## Définition

Le `Pont(Bridge)` est un patron de conception structurel qui permet de séparer une grosse classe ou un ensemble de classes connexes en deux hiérarchies — `abstraction et implémentation` — qui peuvent évoluer indépendamment l’une de l’autre.

## Structure générale

![voir ici](https://i.ibb.co/w4jrqYH/bridge.png)

## Cas pratique du patron bridge

Cet exemple montre comment le Pont aide à diviser le code monolithique d’une application qui gère les appareils et leurs télécommandes. Les `Appareils` prennent le rôle de l’implémentation et les `Télécommandes` font office d’abstraction.

## Structure du cas pratique

![voir ici](https://i.ibb.co/hmxFLkt/bridge-exemple.png)

## Implémentation du cas pratique en Java et Typescript

Voir les 2 dossiers ci-dessus
