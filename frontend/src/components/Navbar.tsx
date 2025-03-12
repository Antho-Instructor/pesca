import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

import { useAuth } from "../context/AuthContext.tsx";
import { api } from "../helpers/api.ts";

function Navbar() {
	const [categories, setCategories] = useState<Category[]>([]);

	const { user, handleLogout } = useAuth();

	useEffect(() => {
		const fetchData = async () => {
			const response = await api.get("/categories");
			setCategories(response.data);
		};

		fetchData();
	}, []);

	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link
					to="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<img src="/logo.png" alt="Logo" className="h-24 w-24" />
					<span className="ml-3 text-xl">Pesca</span>
				</Link>
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					{categories.map((category) => (
						<NavLink
							key={category.id}
							className={({ isActive }) =>
								isActive
									? "mr-5 text-blue-500 font-bold"
									: "mr-5 hover:text-gray-900"
							}
							to={`/categories/${category.slug}`}
						>
							{category.name}
						</NavLink>
					))}
				</nav>
				<Link
					to="/cart"
					className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
				>
					Panier
					<FaCartArrowDown className="ml-1 h-6 w-6" />
				</Link>
				<div className="flex md:ml-auto md:mr-auto">
					{user ? (
						user.role === "admin" ? (
							<>
								<button
									className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-1"
									type="button"
									onClick={handleLogout}
								>
									<MdLogout className="ml-1 h-6 w-6" />
								</button>
								<Link
									to="/admin"
									className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-1"
								>
									<RiAdminLine className="ml-1 h-6 w-6" />
								</Link>
							</>
						) : (
							<button
								className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-1"
								type="button"
								onClick={handleLogout}
							>
								<MdLogout className="ml-1 h-6 w-6" />
							</button>
						)
					) : (
						<Link
							to="/login"
							className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-1"
						>
							<FaRegUserCircle className="ml-1 h-6 w-6" />
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}

export default Navbar;
