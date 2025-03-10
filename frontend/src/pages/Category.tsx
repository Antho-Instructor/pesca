import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";

function Category() {
	const categories = useLoaderData() as Product[];

	return (
		<section>
			<h1 className="text-3xl font-bold text-gray-900 my-2">
				Tous les produits
			</h1>

			<div className="grid grid-cols-2 gap-8 mt-6">
				{categories.map((category: any) => (
					<ProductCard key={category.id} product={category} isBuy />
				))}
			</div>
		</section>
	);
}

export default Category;
