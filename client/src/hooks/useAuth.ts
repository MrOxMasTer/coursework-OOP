import { api } from "@/api/api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
	user: { id: string; email: string } | null;
	isAuthenticated: boolean;
	loading: boolean;
	setUser: (user: { id: string; email: string }) => void;
	logout: () => void;
	initializeAuth: () => Promise<void>;
}

export const useAuth = create(
	persist<AuthState>(
		(set) => ({
			user: null,
			isAuthenticated: false,
			loading: true,
			setUser: (user) => set({ user, isAuthenticated: true, loading: false }),
			logout: () => {
				localStorage.removeItem("token");
				set({ user: null, isAuthenticated: false, loading: false });
			},
			initializeAuth: async () => {
				const token = localStorage.getItem("token");

				if (!token) {
					set({ user: null, isAuthenticated: false, loading: false });
					return;
				}

				try {
					const response = await api.get("/api/me", {
						headers: { Authorization: `Bearer ${token}` },
					});

					if (response.ok) {
						// const user = await response.json();
						// if (user) {
						// 	set({ user, isAuthenticated: true, loading: false });
						// }
					} else {
						set({ user: null, isAuthenticated: false, loading: false });
					}
				} catch (error) {
					console.error("Ошибка при инициализации:", error);
					set({ user: null, isAuthenticated: false, loading: false });
				}
			},
		}),
		{ name: "auth-storage" },
	),
);
