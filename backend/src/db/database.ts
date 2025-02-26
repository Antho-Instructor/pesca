import Database from "better-sqlite3";

// Nom du fichier de la base
export const dbName = "database.db";

// Création de la connexion SQLite
export const db = new Database(dbName, { verbose: console.log });
