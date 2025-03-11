import { CategoryRepository } from "../models/CategoryRepository";
import { ProductRepository } from "../models/ProductRepository";

console.log("📌 Réinitialisation des catégories...");
console.log(CategoryRepository.getCategories());

const newCategoryId = CategoryRepository.createCategory(
	"Équipements nautiques",
	"equipements-nautiques"
);
console.log(
	"✅ Nouvelle catégorie créée :",
	CategoryRepository.getCategory(newCategoryId as number)
);

const newProductId = ProductRepository.createProduct(
	"Écho-sondeur Garmin",
	"Idéal pour repérer les bancs de poissons",
	299.99,
	newCategoryId as number,
	"echo-sondeur.jpg"
);
console.log(
	"✅ Nouveau produit ajouté :",
	ProductRepository.getProduct(newProductId as number)
);

console.log("🎣 Tous les produits :", ProductRepository.getProducts());

ProductRepository.updateProduct(
	newProductId as number,
	"Écho-sondeur Lowrance",
	"Version améliorée avec GPS intégré",
	349.99,
	newCategoryId as number,
	"echo-sondeur-lowrance.jpg"
);
console.log(
	"🛠 Produit mis à jour :",
	ProductRepository.getProduct(newProductId as number)
);

ProductRepository.deleteProduct(newProductId as number);
console.log(
	"🗑 Produit supprimé :",
	ProductRepository.getProduct(newProductId as number)
);

CategoryRepository.deleteCategory(newCategoryId as number);
console.log(
	"🗑 Catégorie supprimée :",
	CategoryRepository.getCategory(newCategoryId as number)
);

// Fermeture de la connexion à la base de données
console.log("🚪 Fermeture de la base de données...");
process.exit(0);
