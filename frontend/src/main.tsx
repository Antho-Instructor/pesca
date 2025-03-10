import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { api } from "./helpers/api.ts";
import App from "./App.tsx";
import Layout from "./pages/Layout.tsx";
import "./index.css";
import Category from "./pages/Category.tsx";
import Cart from "./pages/Cart.tsx";
import { CartProvider } from "./context/CartContext.tsx";
import UniqueProduct from "./components/UniqueProduct.tsx";
import { ToastContainer } from "react-toastify";

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
				loader: async ({ params }) => {
					try {
						const response = await api.get(
							`/products/category/${params.slug}`
						);
						return response.data;
					} catch (error) {
						console.error(error);
						return null;
					}
				},
			},
			{
				path: "/products/:id",
				element: <UniqueProduct />,
				loader: async ({ params }) => {
					try {
						const response = await api.get(
							`/products/${params.id}`
						);
						return response.data;
					} catch (error) {
						console.error(error);
						return null;
					}
				},
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
		<CartProvider>
			<RouterProvider router={router} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</CartProvider>
	</StrictMode>
);
