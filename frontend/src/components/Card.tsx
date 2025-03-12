import { Link } from "react-router-dom";

function Card({ category, title, description, id, isBestSeller }: CardProps) {
	return (
		<div className="rounded-sm shadow-xl w-full">
			<div className="h-full drop-shadow-xl bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
				{isBestSeller && (
					<span className="absolute top-4 left-4 bg-[#1b9778] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
						Best Seller
					</span>
				)}

				<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
					{category}
				</h2>
				<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
					{title}
				</h1>
				<p className="leading-relaxed mb-3">{description}</p>
				<Link
					className="text-indigo-500 inline-flex items-center"
					to={`/products/${id}`}
				>
					En savoir plus
					<svg
						className="w-4 h-4 ml-2"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M5 12h14"></path>
						<path d="M12 5l7 7-7 7"></path>
					</svg>
				</Link>
			</div>
		</div>
	);
}

export default Card;
