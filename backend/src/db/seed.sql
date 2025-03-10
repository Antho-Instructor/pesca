CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0,
    category_id INTEGER NOT NULL,
    image TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name, slug) VALUES
('Cannes à pêche', 'cannes-a-peche'),
('Leurres et appâts', 'leurres-et-appats'),
('Moulinets', 'moulinets'),
('Accessoires', 'accessoires');

INSERT INTO products (name, description, price, category_id, image, stock) VALUES
('Canne Shimano Exage', 'Canne télescopique légère', 99.99, 1, 'cannes-shimano-exage.jpg', 2),
('Canne Daiwa Prorex', 'Canne spéciale carnassiers', 129.99, 1, 'cannes-prorex.jpg', 12),
('Leurre Rapala X-Rap', 'Leurre flottant pour carnassiers', 12.99, 2, 'leurre-X-Rap-650.jpg', 4),
('Cuiller Mepps Aglia', 'Cuiller pour truite et perche', 5.49, 2, 'leurre-aglia.jpg', 20),
('Moulinet Daiwa BG 5000', 'Moulinet robuste pour mer et eau douce', 149.99, 3, 'moulinet-daiwa.jpg', 18),
('Moulinet Shimano Stradic', 'Moulinet haute performance', 179.99, 3, 'moulinet-shimano.jpg', 41),
('Fil fluorocarbone 0.30mm', 'Fil invisible sous l’eau, idéal pour carnassiers', 14.99, 4, 'accessoire-fil-fluorocarbone.jpg', 55),
('Boîte de 50 hameçons Mustad', 'Hameçons résistants pour tous types de pêche', 9.99, 4, 'accessoire-50-hamecons.jpg', 11);
