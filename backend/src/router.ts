import express from "express";

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

/**
 * Toutes les routes concernant les produits
 */

export default router;
