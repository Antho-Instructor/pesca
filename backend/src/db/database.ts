import Database from "better-sqlite3";
import path from "path";

// Force un chemin absolu pour éviter les conflits
export const dbName = path.resolve(__dirname, "../database.db");

// Création de la base de données
export const db = new Database(dbName, { verbose: console.log });
