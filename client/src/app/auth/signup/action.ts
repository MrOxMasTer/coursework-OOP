export const signUpAction = (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();

	if (email && password) {
		// TODO: signUp
	}

	return {
		isSuccess: false,
	};
};
