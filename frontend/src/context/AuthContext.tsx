import { createContext, useContext, useEffect, useState } from "react";
import { showToast } from "../helpers/toast";

type AuthContextType = {
	user: User | null;
	handleLogin: (user: User) => void;
	handleLogout: () => void;
	isLogged: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

type ChildrenType = {
	children: React.ReactNode;
};

export function AuthProvider({ children }: ChildrenType) {
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user") || "null");
		if (user) {
			handleLogin(user);
		}
	}, []);

	const [user, setUser] = useState<User | null>(null);
	const [isLogged, setIsLogged] = useState(false);

	const handleLogin = (user: User) => {
		setUser(user);
		setIsLogged(true);
		showToast("success", `Bienvenue ${user.email}`);
	};

	const handleLogout = () => {
		setUser(null);
		setIsLogged(false);
		showToast("success", "Vous êtes déconnecté");
		localStorage.removeItem("user");
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLogged,
				handleLogin,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	const value = useContext(AuthContext);

	if (value == null) {
		throw new Error("useAuth has to be used within <AuthProvider />");
	}

	return value;
};
