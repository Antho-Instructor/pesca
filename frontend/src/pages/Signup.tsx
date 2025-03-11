import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../helpers/api";

function Signup() {
	const [register, setRegister] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setRegister((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await api.post("/register", register);
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Inscription
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
					<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label
									htmlFor="email"
									className="block text-sm/6 font-medium text-gray-900"
								>
									Ton email
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										required
										onChange={handleChange}
										autoComplete="email"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm/6 font-medium text-gray-900"
								>
									Mot de passe
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										onChange={handleChange}
										required
										autoComplete="current-password"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									S'inscrire
								</button>
							</div>
						</form>
					</div>

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						Tu as déjà un compte ?{" "}
						<Link
							to="/login"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Clique ici
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Signup;
