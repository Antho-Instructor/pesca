-- Suppression des tables si elles existent déjà (pour réinitialiser les données)
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;

-- Création des tables
CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category_id INTEGER NOT NULL,
    image TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Insertion des catégories
INSERT INTO categories (id, name, description) VALUES
(1, 'Cannes à pêche', 'Cannes adaptées à différents types de pêche.'),
(2, 'Leurres et appâts', 'Leurres et appâts pour attirer le poisson.'),
(3, 'Moulinets', 'Moulinets pour toutes les techniques de pêche.'),
(4, 'Accessoires', 'Équipements divers : hameçons, fils, flotteurs.');

-- Insertion des produits
INSERT INTO products (id, name, description, price, category_id, image, created_at, updated_at) VALUES
(1, 'Canne Shimano Exage', 'Canne télescopique légère', 99.99, 1, 'canne-shimano.jpg', datetime('now'), datetime('now')),
(2, 'Canne Daiwa Prorex', 'Canne spéciale carnassiers', 129.99, 1, 'canne-daiwa.jpg', datetime('now'), datetime('now')),
(3, 'Leurre Rapala X-Rap', 'Leurre flottant pour carnassiers', 12.99, 2, 'leurre-rapala.jpg', datetime('now'), datetime('now')),
(4, 'Cuiller Mepps Aglia', 'Cuiller pour truite et perche', 5.49, 2, 'cuiller-mepps.jpg', datetime('now'), datetime('now')),
(5, 'Moulinet Daiwa BG 5000', 'Moulinet robuste pour mer et eau douce', 149.99, 3, 'moulinet-daiwa.jpg', datetime('now'), datetime('now')),
(6, 'Moulinet Shimano Stradic', 'Moulinet haute performance', 179.99, 3, 'moulinet-shimano.jpg', datetime('now'), datetime('now')),
(7, 'Fil fluorocarbone 0.30mm', 'Fil invisible sous l’eau, idéal pour carnassiers', 14.99, 4, 'fil-fluoro.jpg', datetime('now'), datetime('now')),
(8, 'Boîte de 50 hameçons Mustad', 'Hameçons résistants pour tous types de pêche', 9.99, 4, 'hamecons-mustad.jpg', datetime('now'), datetime('now'));
