"use server";

import { Warehouse, warehousesService } from "@/api/warehousesService";
import { clearActionKeys } from "@/lib/next";

export const editWarehouseAction = async (
	prevState: unknown,
	formData: FormData,
) => {
	clearActionKeys(formData);

	const warehouse = Object.fromEntries(
		formData.entries(),
	) as unknown as Warehouse;

	try {
		const response = await warehousesService.updateById(
			warehouse.id,
			warehouse,
		);

		if (response) {
			return {
				success: true,
			};
		}

		return {
			success: false,
		};
	} catch {
		return {
			success: false,
		};
	}
};

export type EditWarehouseAction = typeof editWarehouseAction;
