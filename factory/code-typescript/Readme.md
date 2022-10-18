# Utilisation de la factory method

Le pattern factory peut être implémenté avec 2 approches, ici vous avez les implémentations en typescript de ces 2 approches

# Comment exécuter le programme

Une fois que vous avez cloné le projet, suivez ces étapes pour exécuter le programme

## 1 - Installer nodejs

Pour exécuter ce pattern vous devez avoir `nodejs` et `npm` installés. pour le faire, suivez cette vidéo de moins de 5 min pour les installer en fonction de votre système d'exploitation.

- [Installer sur windows](https://www.youtube.com/watch?v=m6guq1G6SCo)
- [Installer sur linux et macOs](https://www.youtube.com/watch?v=LNdfmdKB8YM)

## 2 - Installer les dépendances

```bash
  npm install
```

## 3 - Compiler le code typescript en code JavaScript

Transformez les fichiers typescripts en fichiers javascripts avec la commande suivante

```bash
  npx tsc
```

ou si vous voulez que le code typescript soit automatiquement compilé en javascript lors de la modification, exécutez la commande suivante

```bash
  npx tsc --watch
```

Ces 2 commandes vont créer un dossier `build` avec tous les fichiers et dossier `typescript` transformé en `Javascript`.

## 5 - Exécuter le programme

Pour la `première méthode` de factory

```bash
  node dist/premiereMethode/Client.js
```

Pour la `deuxième méthode` de factory

```bash
  node dist/deuxiemeMethode/Client.js
```
