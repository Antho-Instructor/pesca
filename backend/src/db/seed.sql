CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
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

INSERT INTO categories (name) VALUES
('Cannes à pêche'),
('Leurres et appâts'),
('Moulinets'),
('Accessoires');

INSERT INTO products (name, description, price, category_id, image) VALUES
('Canne Shimano Exage', 'Canne télescopique légère', 99.99, 1, 'canne-shimano.jpg'),
('Canne Daiwa Prorex', 'Canne spéciale carnassiers', 129.99, 1, 'canne-daiwa.jpg'),
('Leurre Rapala X-Rap', 'Leurre flottant pour carnassiers', 12.99, 2, 'leurre-rapala.jpg'),
('Cuiller Mepps Aglia', 'Cuiller pour truite et perche', 5.49, 2, 'cuiller-mepps.jpg'),
('Moulinet Daiwa BG 5000', 'Moulinet robuste pour mer et eau douce', 149.99, 3, 'moulinet-daiwa.jpg'),
('Moulinet Shimano Stradic', 'Moulinet haute performance', 179.99, 3, 'moulinet-shimano.jpg'),
('Fil fluorocarbone 0.30mm', 'Fil invisible sous l’eau, idéal pour carnassiers', 14.99, 4, 'fil-fluoro.jpg'),
('Boîte de 50 hameçons Mustad', 'Hameçons résistants pour tous types de pêche', 9.99, 4, 'hamecons-mustad.jpg');
