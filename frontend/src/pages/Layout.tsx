import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
	return (
		<main className="flex flex-col h-screen">
			<Navbar />
			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl w-screen">
					<Outlet />
				</div>
			</section>
			<Footer />
		</main>
	);
}

export default Layout;
