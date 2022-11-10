# Utilisation de la factory

Le pattern factory peut être implémenté avec 2 approches, ici vous avez les implémentations en typescript de ces 2 approches

# Comment exécuter le programme ?

## Prérequis

Pour exécuter ce programme, il faut avoir à la fois `nodejs` et `npm` installés. Une fois que c'est fait, suivez les étapes suivantes

- [Installer sur windows](https://www.youtube.com/watch?v=m6guq1G6SCo)
- [Installer sur linux et macOs](https://www.youtube.com/watch?v=LNdfmdKB8YM)

## Étape 1: se diriger dans le chemin du dossier

Une fois dans le dossier `design-patterns`, dirigez-vous dans bon dossier avec cette commande.

```bash
cd 1-patrons-de-creations/factory/code-typescript
```

## Étape 2: Installer les dépendances

```bash
  npm install
```

## Étape 3: Compiler le code typescript en code JavaScript

Transformez les fichiers typescripts en fichiers javascripts avec la commande suivante

```bash
  npx tsc
```

ou si vous voulez que le code typescript soit automatiquement compilé en javascript lors de la modification, exécutez la commande suivante

```bash
  npx tsc --watch
```

Ces 2 commandes vont créer un dossier `build` avec tous les fichiers et dossier `typescript` transformé en `Javascript`.

## Étape 4: Exécuter le programme

Pour la **première méthode** de factory

```bash
  node build/premiereMethode/Client.js
```

Pour la **deuxième méthode** de factory

```bash
  node build/deuxiemeMethode/Client.js
```
