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
	static createCategory(name: string, slug: string) {
		const stmt = db.prepare(
			"INSERT INTO categories (name, slug) VALUES (?, ?)"
		);
		const result = stmt.run(name, slug);
		return result.lastInsertRowid;
	}

	// Met à jour une catégorie
	static updateCategory(id: number, name: string, slug: string) {
		const stmt = db.prepare(
			"UPDATE categories SET name = ?, slug = ?, updated_at = datetime('now') WHERE id = ?"
		);
		return stmt.run(name, slug, id);
	}

	// Supprime une catégorie
	static deleteCategory(id: number) {
		const stmt = db.prepare("DELETE FROM categories WHERE id = ?");
		return stmt.run(id);
	}

	
}

export default new CategoryRepository();
