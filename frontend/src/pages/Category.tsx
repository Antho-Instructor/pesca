import { useParams } from "react-router-dom";

function Category() {
	const { slug } = useParams<{ slug: string }>();

	return (
		<section>
			<h1>Je suis le composant : `Category` et mon slug est : {slug}</h1>
		</section>
	);
}

export default Category;
