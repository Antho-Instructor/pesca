import { db } from "../db/database";

export class UserRepository {
	// Vérifie les informations de connexion
	static login(email: string, password: string) {
		return db
			.prepare("SELECT * FROM users WHERE email = ? AND password = ?")
			.get(email, password);
	}

	// Crée un nouvel utilisateur
	static register(email: string, password: string) {
		const stmt = db.prepare(
			"INSERT INTO users (email, password) VALUES (?, ?)"
		);
		const result = stmt.run(email, password);
		return result.lastInsertRowid;
	}
}

export default new UserRepository();
