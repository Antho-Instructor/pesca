import { useLoaderData } from "react-router-dom";
import Card from "./components/Card";

interface Product {
	id: number;
	name: string;
	description: string;
	category_name: string;
}

function App() {
	const data = useLoaderData() as Product[];

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-16 mx-auto">
				<div className="flex flex-wrap -m-4">
					{data.slice(0, 3).map((product: Product) => (
						<Card
							key={product.id}
							title={product.name}
							description={product.description}
							category={product.category_name}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default App;
