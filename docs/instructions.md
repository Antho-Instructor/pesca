# Instructions

Salut 👋 !

Je m'appelle Anthony, je suis l'ancien développeur du projet, malheureusement, je n'ai pas eu l'occasion de terminer le backend du projet. J'ai donc besoin de ton aide pour terminer le travail.

C'est un projet de site e-commerce pour une entreprise de vente de matériel de pêche. Le frontend est déjà terminé, **tous les endpoints sont créés** coté frontend, tu n'as donc absolument rien à faire dessus, il ne reste plus qu'a le lié avec le backend.

D'ailleurs, j'ai initialisé le backend en `TS` avec `Express` et `SQLite` pour la base de données et les models. Tu peux retrouver toute la documentation technique dans le fichier [`documentation.md`](./documentation.md), à l'intérieur, tu y trouveras toutes les informations nécessaires pour terminer le projet, les endpoints à créer, les controllers, etc.

## Installation

Pour installer le projet, il te suffit de cloner le projet et de lancer la commande suivante :

```bash
npm install
```

Tu dois faire la commande `seed` pour initialiser la base de données :

```bash
npm run seed
```

Puis tu peux lancer le serveur avec la commande suivante :

```bash
npm run dev
```

Il y a un utilisateur enregistré en tant que `admin` dans la base de données pour te permettre de tester les l'ajout de produits, de catégories, etc.

-   **Email**: `admin@pesca.com`
-   **Password**: `MOT2passe!`

## Ce que j'ai fait

-   [x] Initialisation du projet
-   [x] Fait-tout le frontend
    -   [x] Création des pages login, signup, home, product, etc.
    -   [x] Création des composants
    -   [x] Création des helpers
-   [x] Initialisation de la base de données
-   [x] Initialisation des models

Pour tester les models, j'ai créé un fichier `test.ts` dans le dossier `tests` qui te permettra de tester les models.

Il faut que tu fasses la commande suivante :

```bash
npm run test:sqlite
```

## Ce qu'il te reste à faire

Et bien, il te reste à faire :

-   [ ] Créer les controllers
-   [ ] Créer les routes (endpoints)
