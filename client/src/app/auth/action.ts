"use server";

import { api } from "@/api/api";
import { redirect } from "next/navigation";

export const authAction = async (formData: FormData) => {
	const email = formData.get("email")?.toString();

	if (email) {
		const user = await api.get("users", { json: { email: email } }).json();

		// TODO: validation

		if (user) {
			redirect("/auth/signin");
		} else {
			redirect("/auth/signup");
		}
	}

	return {
		isSuccess: false,
	};
};
