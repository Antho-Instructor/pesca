import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

function ProductCard({ product, isBuy }: ProductCardProps) {
	const { addToCart } = useCart();

	return (
		<div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<ProductImage imageUrl={product.image} name={product.name} />

				<div className="space-y-4">
					<div>
						<div className="flex items-center justify-between">
							<span className="text-sm text-indigo-600 font-medium">
								{product.category}
							</span>
						</div>
						<h1 className="text-2xl font-bold text-gray-900 mt-2">
							{product.name}
						</h1>
					</div>

					<ProductPrice price={product.price} stock={product.stock} />

					<p className="text-gray-600 leading-relaxed">
						{product.description}
					</p>

					{!isBuy ? (
						<button
							className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 ${
								product.stock === 0 &&
								"cursor-not-allowed opacity-50"
							}`}
							type="button"
							onClick={() => {
								if (product.stock === 0) return;
								addToCart(product);
							}}
						>
							Acheter
						</button>
					) : (
						<Link
							to={`/products/${product.id}`}
							className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
							type="button"
						>
							Voir le produit
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
