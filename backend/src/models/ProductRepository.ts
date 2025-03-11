import { db } from "../db/database";

export class ProductRepository {
	// Récupère tous les produits
	static getProducts() {
		return db.prepare("SELECT * FROM products").all();
	}

	// Récupère tous les produits avec une jointure sur la table categories
	static getProductsJoinCategories() {
		return db
			.prepare(
				"SELECT products.*, categories.name as category_name FROM products JOIN categories ON products.category_id = categories.id"
			)
			.all();
	}

	// Récupère un produit spécifique par ID
	static getProduct(id: number) {
		return db.prepare("SELECT * FROM products WHERE id = ?").get(id);
	}

	// Crée un nouveau produit
	static createProduct(
		name: string,
		description: string,
		price: number,
		category_id: number,
		image: string
	) {
		const stmt = db.prepare(`
      INSERT INTO products (name, description, price, category_id, image) 
      VALUES (?, ?, ?, ?, ?)
    `);
		const result = stmt.run(name, description, price, category_id, image);
		return result.lastInsertRowid;
	}

	// Met à jour un produit
	static updateProduct(
		id: number,
		name: string,
		description: string,
		price: number,
		category_id: number,
		image: string
	) {
		const stmt = db.prepare(`
      UPDATE products 
      SET name = ?, description = ?, price = ?, category_id = ?, image = ?, updated_at = datetime('now') 
      WHERE id = ?
    `);
		return stmt.run(name, description, price, category_id, image, id);
	}

	// Supprime un produit
	static deleteProduct(id: number) {
		const stmt = db.prepare("DELETE FROM products WHERE id = ?");
		return stmt.run(id);
	}

	// Récupère un produit spécifique d'une catégorie donnée
	static getOneProductByCategory(category_id: number, product_id: number) {
		return db
			.prepare("SELECT * FROM products WHERE category_id = ? AND id = ?")
			.get(category_id, product_id);
	}

	// Récupère tous les produits d'une catégorie
	static getProductsByCategorySlug(slug: string) {
		return db
			.prepare(
				"SELECT products.*, categories.name as category_name FROM products JOIN categories ON products.category_id = categories.id WHERE categories.slug = ?"
			)
			.all(slug);
	}
}

export default new ProductRepository();
