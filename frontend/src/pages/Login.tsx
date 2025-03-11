import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { api } from "../helpers/api";
import { showToast } from "../helpers/toast";

function Login() {
	const nav = useNavigate();
	const [login, setLogin] = useState({
		email: "",
		password: "",
	});
	const [checked, setChecked] = useState(false);

	const handleCheckebox = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
	};

	const { handleLogin } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setLogin((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await api.post("/login", login);
			if (!response.data) {
				showToast("error", "Email ou mot de passe incorrect");
				return;
			}

			const { password, ...user } = response.data;

			handleLogin(user);
			if (checked) {
				localStorage.setItem("user", JSON.stringify(user));
			}

			nav("/cart");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
						Connexion
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
										value={login.email}
										onChange={handleChange}
										required
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
										required
										value={login.password}
										onChange={handleChange}
										autoComplete="current-password"
										className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex gap-3">
									<div className="flex h-6 shrink-0 items-center">
										<div className="group grid size-4 grid-cols-1">
											<input
												id="remember-me"
												name="remember-me"
												onChange={handleCheckebox}
												type="checkbox"
												className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
											/>
										</div>
									</div>
									<label
										htmlFor="remember-me"
										className="block text-sm/6 text-gray-900"
									>
										Se souvenir de moi
									</label>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Se connecter
								</button>
							</div>
						</form>
					</div>

					<p className="mt-10 text-center text-sm/6 text-gray-500">
						Tu n'as pas de compte ?{" "}
						<Link
							to="/signup"
							className="font-semibold text-indigo-600 hover:text-indigo-500"
						>
							Inscrit toi ici
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
