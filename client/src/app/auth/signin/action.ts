export const signInAction = (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (email && password) {
		// TODO: auth
	}

	return {
		isSuccess: false,
	};
};
