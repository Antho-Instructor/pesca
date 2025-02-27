import Card from "./components/Card";

function App() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-16 mx-auto">
				<div className="flex flex-wrap -m-4">
					{Array.from({ length: 3 }).map((_, index) => (
						<Card key={index} />
					))}
				</div>
			</div>
		</section>
	);
}

export default App;
