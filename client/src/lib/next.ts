export const clearActionKeys = (formData: FormData) => {
	for (const key of formData.keys()) {
		console.log("FORMDATA_KEY: ", key);

		if (key.startsWith("$ACTION")) {
			formData.delete(key);
			break;
		}
	}
};
