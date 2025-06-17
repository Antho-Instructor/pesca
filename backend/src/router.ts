import express from "express";
import { CategoryRepository } from "./models/CategoryRepository";
import { ProductRepository } from "./models/ProductRepository";
import { UserRepository } from "./models/UserRepository";

const router = express.Router();

/**
 * Root route
 */
router.get("/", (req, res) => {
	res.send("Hello, TypeScript with Express!");
});

/**
 * Toutes les routes concernant les categories
 */

router.get("/categories", async (req, res) => {
	try {
		const response = await CategoryRepository.getCategories();
		res.json(response);
	} catch (error) {}
});

/**
 * Toutes les routes concernant les produits
 */

router.get("/products", async (req, res) => {
	try {
		const response = await ProductRepository.getProductsJoinCategories();
		res.json(response);
	} catch (error) {
		console.error(error);
	}
});

router.get("/products/:id", async (req, res) => {
	try {
		const response = await ProductRepository.getProduct(
			Number(req.params.id)
		);
		res.json(response);
	} catch (error) {
		console.error(error);
	}
});

router.get("/products/category/:slug", async (req, res) => {
	try {
		const response = await ProductRepository.getProductsByCategorySlug(
			req.params.slug
		);
		res.json(response);
	} catch (error) {
		console.error(error);
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const response = await UserRepository.login(email, password);
		res.json(response);
	} catch (error) {
		console.error(error);
	}
});

export default router;
