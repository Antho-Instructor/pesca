import { dbName } from "./database";
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

// 🔄 Étape 1 : Supprimer l'ancienne base si elle existe
if (fs.existsSync(dbName)) {
	console.log("🔄 Suppression de l'ancienne base...");
	fs.unlinkSync(dbName);
}

// ✅ Étape 2 : Créer une nouvelle connexion SQLite
console.log("✅ Création d'une nouvelle base de données...");
const db = new Database(dbName);

// 🌱 Étape 3 : Charger et exécuter le fichier `seed.sql`
console.log("🌱 Initialisation des données...");

// 📌 Correction du chemin `seed.sql` en ES Module
const seedPath = path.resolve("src/db/seed.sql");

if (!fs.existsSync(seedPath)) {
	console.error("❌ ERREUR : Le fichier seed.sql est introuvable !");
	process.exit(1);
}

const sql = fs.readFileSync(seedPath, "utf8");
db.exec(sql);
console.log("📦 Données initialisées avec succès !");

// ✅ Étape 4 : Fermer proprement la connexion
db.close();
console.log("🔒 Connexion SQLite fermée.");
