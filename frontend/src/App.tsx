import { useLoaderData } from "react-router-dom";
import Card from "./components/Card";
import Testimonials from "./components/Testimonials";

function App() {
	const data = useLoaderData() as Product[];

	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-16 mx-auto">
				<div className="flex flex-wrap -m-4">
					{data.slice(0, 3).map((product: Product) => (
						<Card
							key={product.id}
							id={product.id}
							title={product.name}
							description={product.description}
							category={product.category_name}
							isBestSeller={product.id === 1 || product.id === 3}
						/>
					))}
				</div>
			</div>
			<Testimonials />
		</section>
	);
}

export default App;
