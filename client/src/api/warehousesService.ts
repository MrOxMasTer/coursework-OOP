import { api } from "./api";

const warehousesApi = api.extend((opts) => ({
	prefixUrl: `${opts.prefixUrl}/warehouses`,
}));

export type Warehouse = {
	id: string;
	name: string;
	capacity: number;
	location: string;
};

export type InsertWarehouse = {
	name: string;
	capacity: number;
	location: string;
};

export const warehousesService = {
	findAll: async (): Promise<Warehouse[]> => {
		const response = await warehousesApi.get("");

		if (!response.ok) {
			throw new Error("warehousesService: findAll");
		}

		return response.json();
	},

	findOneById: async (id: Warehouse["id"]): Promise<Warehouse> => {
		const response = await warehousesApi.get(`${id}`);

		if (!response.ok) {
			throw new Error("warehousesService: findById");
		}

		return response.json();
	},

	updateById: async (id: Warehouse["id"], warehouse: InsertWarehouse) => {
		const response = await warehousesApi.put(`${id}`, {
			json: warehouse,
		});

		if (!response.ok) {
			throw new Error("warehousesService: updateById");
		}

		return response.json();
	},

	count: async (): Promise<{ count: number }> => {
		const response = await warehousesApi.get("count");

		if (!response.ok) {
			throw new Error("warehousesService: count");
		}

		return response.json();
	},

	add: async (warehouse: unknown) => {
		const response = await warehousesApi.post("", {
			json: warehouse,
		});

		if (!response.ok) {
			throw new Error("warehousesService: add");
		}

		return response.json();
	},

	deleteById: async (id: string) => {
		const response = await warehousesApi.delete(`${id}`);

		// if (!response.ok) {
		// 	throw new Error("warehousesService: deleteById");
		// }

		// return response.json();
	},
};
