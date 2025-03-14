import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
function CartInfo({ product }: { product: Product }) {
	const { carts, removeFromCart, addQuantityInCart, removeQuantityInCart } =
		useCart();

	const getProduct = carts.find((item) => item.id === product.id);

	return (
		<div className="relative rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
			<div className="col-span-12 lg:col-span-2 img box">
				<img
					src={`${import.meta.env.VITE_API_URL}/images/${
						product.image
					}`}
					alt={product.name}
					className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
				/>
			</div>
			<div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
				<div className="flex items-center justify-between w-full mb-4">
					<h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
						{product.name}
					</h5>
					<button
						className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
						type="button"
						onClick={() =>
							getProduct && removeFromCart(getProduct.id)
						}
					>
						<FaRegTrashAlt className="w-6 h-6 text-red-500 group-hover:text-red-600 transition-all duration-500" />
					</button>
				</div>

				<p className="font-normal text-base leading-7 text-gray-500 mb-6">
					{product.description}
				</p>
				<div className="flex items-center">
					<button
						className="px-3 py-1 border rounded-l-lg border-gray-300 text-gray-700"
						type="button"
						onClick={() =>
							getProduct && removeQuantityInCart(getProduct.id)
						}
					>
						-
					</button>
					<span className="px-4 py-1 border-t border-b border-gray-300 text-gray-700">
						{product.quantity}
					</span>
					<button
						className="px-3 py-1 border rounded-r-lg border-gray-300 text-gray-700"
						type="button"
						onClick={() =>
							getProduct &&
							addQuantityInCart(getProduct.id, getProduct.stock)
						}
					>
						+
					</button>
				</div>

				<div className="flex justify-end">
					<h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
						{product.price}€
					</h6>
				</div>
			</div>
		</div>
	);
}

export default CartInfo;
