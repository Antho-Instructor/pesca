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
-   `created_at` : date de création de la catégorie
-   `updated_at` : date de mise à jour de la catégorie

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

Vous pouvez accéder à Swagger à l'adresse suivante : `http://localhost:5050/api-docs`

### 🔗 Base URL

-   `http://localhost:5050/api`

### Routes

### 📌 Routes API

| Ressource                          | Méthode  | Endpoint                             | Description                                           | Payload (JSON)                                                                                                                                                                                              |
| ---------------------------------- | -------- | ------------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Catégories**                     |          |                                      |                                                       |                                                                                                                                                                                                             |
| Catégories                         | `GET`    | `/categories`                        | Récupère toutes les catégories                        | -                                                                                                                                                                                                           |
| Catégorie                          | `GET`    | `/categories/:id`                    | Récupère une catégorie spécifique                     | -                                                                                                                                                                                                           |
| Catégorie                          | `POST`   | `/categories`                        | Crée une nouvelle catégorie                           | `{ "name": "Appâts" }`                                                                                                                                                                                      |
| Catégorie                          | `PUT`    | `/categories/:id`                    | Modifie une catégorie existante                       | `{ "name": "Matériel de pêche" }`                                                                                                                                                                           |
| Catégorie                          | `DELETE` | `/categories/:id`                    | Supprime une catégorie                                | -                                                                                                                                                                                                           |
| **Produits**                       |          |                                      |                                                       |                                                                                                                                                                                                             |
| Produits                           | `GET`    | `/products`                          | Récupère tous les produits                            | -                                                                                                                                                                                                           |
| Produit                            | `GET`    | `/products/:id`                      | Récupère un produit spécifique                        | -                                                                                                                                                                                                           |
| Produit                            | `POST`   | `/products`                          | Crée un nouveau produit                               | `{ "name": "Leurre Rapala", "description": "Leurre flottant idéal pour les carnassiers.", "price": 12.99, "category_id": 1, "image": "https://exemple.com/images/leurre-rapala.jpg" }`                      |
| Produit                            | `PUT`    | `/products/:id`                      | Modifie un produit existant                           | `{ "name": "Leurre Rapala XXL", "description": "Version plus grande pour attraper de plus gros poissons.", "price": 19.99, "category_id": 1, "image": "https://exemple.com/images/leurre-rapala-xxl.jpg" }` |
| Produit                            | `DELETE` | `/products/:id`                      | Supprime un produit                                   | -                                                                                                                                                                                                           |
| Produits par catégorie             | `GET`    | `/products/category/:id`             | Récupère tous les produits d'une catégorie            | -                                                                                                                                                                                                           |
| Produit spécifique d’une catégorie | `GET`    | `/products/category/:id/:product_id` | Récupère un produit spécifique d'une catégorie donnée | -                                                                                                                                                                                                           |

## 🗄️ Les models

### CRUD

#### `Category`

-   `getCategories()` : Récupère toutes les catégories
-   `getCategory(id: number)` : Récupère une catégorie spécifique
-   `createCategory(name: string)` : Crée une nouvelle catégorie
-   `updateCategory(id: number, name: string)` : Modifie une catégorie existante
-   `deleteCategory(id: number)` : Supprime une catégorie
-   `getAllProductsByCategory(id: number)` : Récupère tous les produits d'une catégorie

#### `Product`

-   `getProducts()` : Récupère tous les produits
-   `getProduct(id: number)` : Récupère un produit spécifique
-   `createProduct(name: string, description: string, price: number, category_id: number, image: string)` : Crée un nouveau produit
-   `updateProduct(id: number, name: string, description: string, price: number, category_id: number, image: string)` : Modifie un produit existant
-   `deleteProduct(id: number)` : Supprime un produit
-   `getOneProductByCategory(id: number, product_id: number)` : Récupère un produit spécifique d'une catégorie donnée
