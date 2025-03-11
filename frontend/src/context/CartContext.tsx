import { createContext, useContext, useState, useEffect } from "react";
import { showToast } from "../helpers/toast";

const CartContext = createContext<CartContextType | null>(null);

type CartContextType = {
	carts: Product[];
	addToCart: (product: Product, quantity: number) => void;
	removeFromCart: (productId: number) => void;
	totalPrice: number;
	nbCart: number;
	addQuantityInCart: (productId: number, stock: number) => void;
	removeQuantityInCart: (productId: number) => void;
};

type ChildrenType = {
	children: React.ReactNode;
};

export function CartProvider({ children }: ChildrenType) {
	const [carts, setCarts] = useState<Product[]>(() =>
		JSON.parse(sessionStorage.getItem("cart") || "[]")
	);
	const [totalPrice, setTotalPrice] = useState<number>(() =>
		JSON.parse(sessionStorage.getItem("totalPrice") || "0")
	);

	useEffect(() => {
		const newTotalPrice = carts.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		);
		const roundedTotalPrice = parseFloat(newTotalPrice.toFixed(2));

		if (totalPrice !== roundedTotalPrice) {
			setTotalPrice(roundedTotalPrice);
			sessionStorage.setItem(
				"totalPrice",
				JSON.stringify(roundedTotalPrice)
			);
		}
		sessionStorage.setItem("cart", JSON.stringify(carts));
	}, [carts, totalPrice]);

	const addToCart = (product: Product, quantity: number) => {
		setCarts((prevCarts) => {
			const existingProduct = prevCarts.find(
				(cart) => cart.id === product.id
			);

			if (existingProduct) {
				showToast("info", "Vous avez déjà ajouté ce produit au panier");
				return prevCarts.map((cart) =>
					cart.id === product.id
						? { ...cart, quantity: cart.quantity + quantity }
						: cart
				);
			}

			showToast("success", "Le produit a été ajouté au panier");
			return [...prevCarts, { ...product, quantity }];
		});
	};

	const addQuantityInCart = (productId: number, stock: number) => {
		setCarts((prevCarts) => {
			return prevCarts.map((product) => {
				if (product.id === productId) {
					if (product.quantity < stock) {
						return { ...product, quantity: product.quantity + 1 };
					}
				}
				return product;
			});
		});
	};

	const removeQuantityInCart = (productId: number) => {
		setCarts((prevCarts) => {
			return prevCarts.reduce((acc, product) => {
				if (product.id === productId) {
					if (product.quantity > 1) {
						acc.push({
							...product,
							quantity: product.quantity - 1,
						});
					}
				} else {
					acc.push(product);
				}
				return acc;
			}, [] as Product[]);
		});
	};

	const removeFromCart = (productId: number) => {
		setCarts((prevCarts) => {
			const updatedCarts = prevCarts.filter(
				(product) => product.id !== productId
			);
			setTimeout(
				() => showToast("info", "Le produit a été retiré du panier"),
				0
			);
			return updatedCarts;
		});
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
