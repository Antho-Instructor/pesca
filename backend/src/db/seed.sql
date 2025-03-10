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
('Boîte de 50 hameçons Mustad', 'Hameçons résistants pour tous types de pêche', 9.99, 4, 'accessoire-50-hamecons.avif', 11),
('Moulinet Okuma Ceymar (63)', 'Moulinet léger et fluide', 88.2, 3, 'moulinet-okuma.jpg', 44),
('Trousse à leurres Rapala (50)', 'Trousse de rangement pour leurres', 32.13, 4, 'accessoire-trousse-leurres.jpg', 40),
('Leurre Storm Wildeye (57)', 'Leurre pour la pêche en eau douce', 11.05, 2, 'leurre-storm.jpg', 65),
('Canne Abu Garcia Veritas (84)', 'Canne ultra légère et résistante', 141.71, 1, 'cannes-garcia-veritas.webp', 78),
('Leurre Savage Gear 4D (5)', 'Leurre imitant un poisson nageur', 17.43, 2, 'leurre-savage.jpg', 1),
('Moulinet Okuma Ceymar (94)', 'Moulinet léger et fluide', 94.88, 3, 'moulinet-okuma.jpg', 48),
('Canne Abu Garcia Veritas (30)', 'Canne ultra légère et résistante', 150.4, 1, 'cannes-garcia-veritas.webp', 99),
('Trousse à leurres Rapala (64)', 'Trousse de rangement pour leurres', 31.62, 4, 'accessoire-trousse-leurres.jpg', 79),
('Moulinet Penn Battle III (31)', 'Moulinet robuste pour pêche en mer', 187.84, 3, 'moulinet-penn.jpg', 66),
('Leurre Storm Wildeye (70)', 'Leurre pour la pêche en eau douce', 10.73, 2, 'leurre-storm.jpg', 92),
('Fil tressé Power Pro (62)', 'Fil tressé haute résistance', 26.55, 4, 'accessoire-fil-tresse.jpg', 49),
('Canne Abu Garcia Veritas (38)', 'Canne ultra légère et résistante', 136.74, 1, 'cannes-garcia-veritas.webp', 19),
('Moulinet Okuma Ceymar (6)', 'Moulinet léger et fluide', 73.84, 3, 'moulinet-okuma.jpg', 4),
('Leurre Storm Wildeye (34)', 'Leurre pour la pêche en eau douce', 9.8, 2, 'leurre-storm.jpg', 71),
('Moulinet Penn Battle III (92)', 'Moulinet robuste pour pêche en mer', 193.68, 3, 'moulinet-penn.jpg', 52),
('Trousse à leurres Rapala (21)', 'Trousse de rangement pour leurres', 29.63, 4, 'accessoire-trousse-leurres.jpg', 1),
('Moulinet Penn Battle III (30)', 'Moulinet robuste pour pêche en mer', 223.56, 3, 'moulinet-penn.jpg', 12),
('Leurre Savage Gear 4D (17)', 'Leurre imitant un poisson nageur', 18.34, 2, 'leurre-savage.jpg', 34),
('Leurre Savage Gear 4D (36)', 'Leurre imitant un poisson nageur', 16.66, 2, 'leurre-savage.jpg', 84),
('Fil tressé Power Pro (45)', 'Fil tressé haute résistance', 22.74, 4, 'accessoire-fil-tresse.jpg', 46),
('Fil tressé Power Pro (9)', 'Fil tressé haute résistance', 29.32, 4, 'accessoire-fil-tresse.jpg', 68),
('Canne Daiwa Ninja X (35)', 'Canne pour la pêche au lancer', 104.08, 1, 'cannes-daiwa.jpg', 32),
('Fil tressé Power Pro (72)', 'Fil tressé haute résistance', 22.85, 4, 'accessoire-fil-tresse.jpg', 74),
('Leurre Savage Gear 4D (49)', 'Leurre imitant un poisson nageur', 17.62, 2, 'leurre-savage.jpg', 76),
('Canne Abu Garcia Veritas (94)', 'Canne ultra légère et résistante', 160.53, 1, 'cannes-garcia-veritas.webp', 27),
('Fil tressé Power Pro (82)', 'Fil tressé haute résistance', 24.06, 4, 'accessoire-fil-tresse.jpg', 59),
('Trousse à leurres Rapala (29)', 'Trousse de rangement pour leurres', 29.02, 4, 'accessoire-trousse-leurres.jpg', 67);
