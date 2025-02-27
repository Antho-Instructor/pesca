import { db } from "../db/database";

export class CategoryRepository {
	// Récupère toutes les catégories
	static getCategories() {
		return db.prepare("SELECT * FROM categories").all();
	}

	// Récupère une catégorie spécifique par ID
	static getCategory(id: number) {
		return db.prepare("SELECT * FROM categories WHERE id = ?").get(id);
	}

	// Crée une nouvelle catégorie
	static createCategory(name: string) {
		const stmt = db.prepare("INSERT INTO categories (name) VALUES (?)");
		const result = stmt.run(name);
		return result.lastInsertRowid;
	}

	// Met à jour une catégorie
	static updateCategory(id: number, name: string) {
		const stmt = db.prepare(
			"UPDATE categories SET name = ?, updated_at = datetime('now') WHERE id = ?"
		);
		return stmt.run(name, id);
	}

	// Supprime une catégorie
	static deleteCategory(id: number) {
		const stmt = db.prepare("DELETE FROM categories WHERE id = ?");
		return stmt.run(id);
	}

	// Récupère tous les produits d'une catégorie
	static getAllProductsByCategory(id: number) {
		return db
			.prepare("SELECT * FROM products WHERE category_id = ?")
			.all(id);
	}
}

export default new CategoryRepository();
