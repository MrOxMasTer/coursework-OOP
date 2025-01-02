import { api } from "./api";

const ordersApi = api.extend((opts) => ({
	prefixUrl: `${opts.prefixUrl}/orders`,
}));

export const ordersService = {
	count: async (): Promise<{ count: number }> => {
		const response = await ordersApi.get("count");

		if (!response.ok) {
			throw new Error("orderService: count");
		}

		return response.json();
	},

	activeCount: async (): Promise<{ count: number }> => {
		const response = await ordersApi.get("activeCount");

		if (!response.ok) {
			throw new Error("ordersService: activeCount");
		}

		return response.json();
	},
};
