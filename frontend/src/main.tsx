import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { api } from "./helpers/api.ts";
import App from "./App.tsx";
import Layout from "./pages/Layout.tsx";
import "./index.css";
import Category from "./pages/Category.tsx";
import Cart from "./pages/Cart.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
				loader: async () => {
					try {
						const response = await api.get("/products");
						return response.data;
					} catch (error) {
						console.error(error);
					}
				},
			},
			{
				path: "/categories/:slug",
				element: <Category />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement === null) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
