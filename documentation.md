# Documentation technique

## Base de données

La base de donnée utilisé : `SQLite`

### Tables

-   `categories` : table des catégories de produits
-   `products` : table des produits

### Détails des tables

#### Table `categories`

-   `id` : identifiant de la catégorie (clé primaire)
-   `name` : nom de la catégorie
-   `description` : description de la catégorie

#### Table `products`

-   `id` : identifiant du produit (clé primaire)
-   `name` : nom du produit
-   `description` : description du produit
-   `price` : prix du produit
-   `category_id` : identifiant de la catégorie du produit (clé étrangère)
-   `image` : image du produit
-   `created_at` : date de création du produit
-   `updated_at` : date de mise à jour du produit

## API

Vous pouvez accéder à l'API à l'adresse suivante : `http://localhost:5050/api-docs`

### Routes

### 📌 Routes API

| Ressource                  | Méthode  | Endpoint                                 | Description                                    |
| -------------------------- | -------- | ---------------------------------------- | ---------------------------------------------- |
| **Catégories**             |          |                                          |                                                |
| Catégories                 | `GET`    | `/api/categories`                        | Récupère toutes les catégories                 |
| Catégorie                  | `GET`    | `/api/categories/:id`                    | Récupère une catégorie spécifique              |
| Catégorie                  | `POST`   | `/api/categories`                        | Crée une nouvelle catégorie                    |
| Catégorie                  | `PUT`    | `/api/categories/:id`                    | Modifie une catégorie existante                |
| Catégorie                  | `DELETE` | `/api/categories/:id`                    | Supprime une catégorie                         |
| **Produits**               |          |                                          |                                                |
| Produits                   | `GET`    | `/api/products`                          | Récupère tous les produits                     |
| Produit                    | `GET`    | `/api/products/:id`                      | Récupère un produit spécifique                 |
| Produit                    | `POST`   | `/api/products`                          | Crée un nouveau produit                        |
| Produit                    | `PUT`    | `/api/products/:id`                      | Modifie un produit existant                    |
| Produit                    | `DELETE` | `/api/products/:id`                      | Supprime un produit                            |
| **Produits par catégorie** |          |                                          |                                                |
| Produits par catégorie     | `GET`    | `/api/products/category/:id`             | Récupère tous les produits d'une catégorie     |
| Produit dans une catégorie | `GET`    | `/api/products/category/:id/:product_id` | Récupère un produit d'une catégorie spécifique |
