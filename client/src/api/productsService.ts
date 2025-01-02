import { api } from "./api";

const productsApi = api.extend((opts) => ({
	prefixUrl: `${opts.prefixUrl}/products`,
}));

export const productsService = {
	count: async (): Promise<{ count: number }> => {
		const response = await productsApi.get("count");

		if (!response.ok) {
			throw new Error("products count failed");
		}

		return response.json();
	},
};
