"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

export const Auth = () => {
	const { initializeAuth } = useAuth();

	useEffect(() => {
		initializeAuth();
	}, [initializeAuth]);

	return null;
};
