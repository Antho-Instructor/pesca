import { createContext, useContext, useState } from "react";
import { showToast } from "../helpers/toast";

const CartContext = createContext<CartContextType | null>(null);

type CartContextType = {
	carts: Product[];
	addToCart: (product: Product, quantity: number) => void;
	removeFromCart: (productId: number) => void;
	totalPrice: number;
	nbCart: number;
	addQuantityInCart?: (productId: number) => void;
	removeQuantityInCart?: (productId: number) => void;
};

type ChildrenType = {
	children: React.ReactNode;
};

export function CartProvider({ children }: ChildrenType) {
	// Je récupère le panier et le prix total dans le sessionStorage
	const getCart = sessionStorage.getItem("cart");
	const getTotalPrice = sessionStorage.getItem("totalPrice");

	// Si le panier est vide, je le mets dans un tableau vide
	const cart = getCart ? JSON.parse(getCart) : [];
	const price = getTotalPrice ? JSON.parse(getTotalPrice) : 0;

	// Je mets à jour le panier et le prix total
	const [carts, setCarts] = useState<Product[]>(cart);
	const [totalPrice, setTotalPrice] = useState<number>(price);

	const addToCart = (product: Product, quantity: number) => {
		// Si j'ai déjà le produit dans mon panier, je mets à jour la quantité
		if (carts.some((cart) => cart.id === product.id)) {
			const newCarts = carts.map((cart) =>
				cart.id === product.id
					? { ...cart, quantity: cart.quantity + quantity }
					: cart
			);
			setCarts(newCarts);
			sessionStorage.setItem("cart", JSON.stringify(newCarts));
			showToast("info", "Vous avez déjà ajouté ce produit au panier");
			return;
		}

		// Sinon, j'ajoute le produit dans le panier
		const newCarts = [...carts, { ...product, quantity }];
		setCarts(newCarts);
		sessionStorage.setItem("cart", JSON.stringify(newCarts));

		// Je mets à jour le prix total
		updateTotalPrice();

		showToast("success", "Le produit a été ajouté au panier");
	};

	const addQuantityInCart = (productId: number, stock: number) => {
		// Je rajoute la quantité du produit dans le panier
		const newCarts = carts.map((product) =>
			product.id === productId
				? { ...product, quantity: product.quantity + 1 }
				: product
		);
		if (
			newCarts.find((product) => product.id === productId)?.quantity ===
			stock
		) {
			showToast("info", "Vous avez atteint la quantité maximale");
			return;
		}
		setCarts(newCarts);
		updateTotalPrice();
		sessionStorage.setItem("cart", JSON.stringify(newCarts));
	};

	const removeQuantityInCart = (productId: number) => {
		// Je retire la quantité du produit dans le panier
		const newCarts = carts.map((product) =>
			product.id === productId
				? { ...product, quantity: product.quantity - 1 }
				: product
		);
		if (
			newCarts.find((product) => product.id === productId)?.quantity === 0
		) {
			removeFromCart(productId);
			return;
		}
		setCarts(newCarts);
		updateTotalPrice();
		sessionStorage.setItem("cart", JSON.stringify(newCarts));
	};

	const updateTotalPrice = () => {
		// Je mets à jour le prix total
		const newTotalPrice = carts.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		);
		setTotalPrice(newTotalPrice);
		sessionStorage.setItem("totalPrice", JSON.stringify(newTotalPrice));
	};

	const removeFromCart = (productId: number) => {
		// Je retire le produit du panier
		const newCarts = carts.filter((product) => product.id !== productId);
		setCarts(newCarts);
		sessionStorage.setItem("cart", JSON.stringify(newCarts));

		// Je mets à jour le prix total
		updateTotalPrice();
		showToast("info", "Le produit a été retiré du panier");
	};

	return (
		<CartContext.Provider
			value={{
				carts,
				addToCart,
				removeFromCart,
				totalPrice,
				nbCart: carts.length,
				addQuantityInCart,
				removeQuantityInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export const useCart = () => {
	const cart = useContext(CartContext);
	if (!cart) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return cart;
};
