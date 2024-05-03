# Guide de Configuration du Front-end Angular

Ce guide vous aidera à configurer le front-end Angular après avoir récupéré le code depuis le dépôt Git.

## Installation des Dépendances

Avant de démarrer, assurez-vous d'avoir Node.js et npm installés sur votre machine. Ensuite, suivez ces étapes :

1. Ouvrez un terminal et accédez au répertoire du projet Angular.
2. Exécutez la commande suivante pour installer les dépendances :

```bash
npm install
```

## Configuration de Meilisearch

Pour configurer Meilisearch, assurez-vous que votre backend Laravel est correctement configuré avec Scout. Ensuite, suivez ces étapes :

1.    Exécutez la commande suivante pour synchroniser les paramètres de l'index :
```bash
php artisan scout:sync-index-settings
```
2.    Ensuite, importez les données nécessaires dans Meilisearch en exécutant la commande suivante :
```bash
php artisan scout:import "App\Models\Post"
```

## Configuration du Calendrier

Si votre application utilise le module de calendrier Angular, suivez ces étapes :

1.    Installez le module Angular Calendar en exécutant la commande suivante :
```bash
ng add angular-calendar
```
2.    Installez la bibliothèque date-fns en exécutant la commande suivante :
```bash
npm install date-fns
```

## Démarrage du Serveur de Développement
Une fois que vous avez terminé les étapes ci-dessus, vous pouvez démarrer le serveur de développement Angular en exécutant la commande suivante :
```bash
npm install date-fns
```
Le serveur de développement démarrera à l'adresse par défaut http://localhost:4200.
